import React, {useEffect, useRef} from 'react';
import {toast} from 'react-toastify';
import api from '~/services/api'
import * as Yup from 'yup';

import Proptypes from 'prop-types';

import { SaveButton, BackButton } from '~/components/Button';
import { InputSimple, ImageInput } from '~/components/Form';
import HeaderForm from '~/components/HeaderForm';
import history from '~/services/history';

import { Container, Content, UnForm } from './styles';

export default function DeliverymanForm({match}) {
  const {id} = match.params;
  const formRef = useRef(null);

  useEffect(() => {
    async function loadInitialData(deliverymanId) {
      if (id) {
        const res = await api.get(`/deliverymans/${deliverymanId}`);

        formRef.current.setData(res.data);
        formRef.current.setFieldValue('avatar', res?.data?.avatar?.url);
      }
    }

    loadInitialData(id);
  }, [id]);

  async function handleSubmit(data, {reset}) {
    formRef.current.setErrors({});
    
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string().email().required('O email é obrigatório'),        
      });

      await schema.validate(data, {
        abortEarly: false,
      })

      const dataFile = new FormData();

      dataFile.append('file', data.avatar);

      const resFile = data.avatar ? await api.post('files', dataFile) : null;

      //edita cadastro de entregador
      if (id) {
        await api.put(`/deliverymans/${id}`, {
          name: data.name,
          email: data.email,
          avatar_id: resFile?.data?.id,
        });
        toast.success('Entregador editado com sucesso!');
      } else {
        await api.post('/deliverymans', {
          name: data.name,
          email: data.email,
          avatar_id: resFile?.data?.id,
        });
        toast.success('Entregador criado com sucesso!');
      }

      reset();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessages = {};

        error.inner.forEach(error => {
          errorMessages[error.path] = error.message
        });

        formRef.current.setErrors(errorMessages)
      }
    }
  }

  return (
    <Container>
      <Content>
        <HeaderForm title="Cadastro de entregadores">
          <BackButton action={() => history.push('/deliverymans')} />
          <SaveButton action={() => formRef.current.submitForm()} />
        </HeaderForm>
        <UnForm ref={formRef} onSubmit={handleSubmit}>
          <ImageInput name="avatar" />
          <InputSimple
            label="name"
            name="name"
            type="text"
            placeholder="Nome do entregador"
          />
          <InputSimple
            label="email"
            name="email"
            type="email"
            placeholder="Digite o email"
            onKeyPress={e =>
							e.key === 'Enter' ? formRef.current.submitForm() : null} //precionar enter salva
          />
        </UnForm>
      </Content>
    </Container>
  );
}

DeliverymanForm.propTypes = {
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.string,
    }).isRequired,
  }).isRequired,
};
