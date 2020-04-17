import React, { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { SaveButton, BackButton } from '~/components/Button';
import { InputSimple, MaskInput } from '~/components/Form';
import HeaderForm from '~/components/HeaderForm';
import api from '~/services/api';
import history from '~/services/history';

import { Container, Content, UnForm } from './styles';

export default function RecipientForm({ match }) {
  const { id } = match.params;
  const formRef = useRef();

  useEffect(() => {
    async function loadinInitialData() {
      if (id) {
        const res = await api.get(`/recipients/${id}`);

        formRef.current.setData(res.data);
      }
    }

    loadinInitialData();
  }, [id]);

  async function handleSubmit(data, { reset }) {
    formRef.current.setErrors({});
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        street: Yup.string().required('A rua é obrigatória'),
        number: Yup.string().required('O número é obrigatório'),
        complement: Yup.string().notRequired(),
        city: Yup.string().required('A cidade é obrigatória'),
        state: Yup.string().required('O estado é obrigatório'),
        zip_code: Yup.string().required('O CEP é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      if (id) {
        await api.put(`/recipients/${id}`, {
          name: data.name,
          street: data.street,
          number: data.number,
          complement: data.complement,
          city: data.city,
          state: data.state,
          zip_code: data.zip_code,
        });
        toast.success('Destinatário editado com sucesso!');
        history.push('/recipients');
      } else {
        await api.post('/recipients', {
          name: data.name,
          street: data.street,
          number: data.number,
          complement: data.complement,
          city: data.city,
          state: data.state,
          zip_code: data.zip_code,
        });
        toast.success('Destinatário criado com sucesso!');
      }

      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <Container>
      <Content>
        <HeaderForm title="Cadastro de destinatário">
          <BackButton action={() => history.push('/recipients')} />
          <SaveButton action={() => formRef.current.submitForm()} />
        </HeaderForm>

        <UnForm ref={formRef} onSubmit={handleSubmit}>
          <InputSimple
            label="Nome"
            name="name"
            type="text"
            placeholder="Nome do destinatário"
          />
          <div>
            <InputSimple
              label="Rua"
              name="street"
              type="text"
              placeholder="Rua do destinatário"
            />
            <InputSimple
              label="Número"
              name="number"
              type="number"
              placeholder="Número da casa"
            />
            <InputSimple
              label="Complemento"
              name="complement"
              placeholder="Apto 01 blc 102"
              type="text"
            />
          </div>
          <div>
            <InputSimple
              label="Cidade"
              name="city"
              type="text"
              placeholder="Cidade do destinatário"
            />
            <InputSimple
              label="Estado"
              name="state"
              type="text"
              placeholder="Estado do destinatário"
            />
            <InputSimple
              label="CEP"
              name="zip_code"
              type="text"
              placeholder="09960-580"
              mask="09960-580"
              maxLength={9}
            />
          </div>
        </UnForm>
      </Content>
    </Container>
  );
}

RecipientForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
