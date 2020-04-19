import React, { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { BackButton, SaveButton } from '~/components/Button';
import { InputSimple, SelectInput } from '~/components/Form';
import HeaderForm from '~/components/HeaderForm';
import api from '~/services/api';
import history from '~/services/history';

import { Container, Content, Unform } from './styles';

export default function OrderForm({ match }) {
  const { id } = match.params;
  const formRef = useRef(null);

  useEffect(() => {
    async function loadInitialData(orderId) {
      if (id) {
        const res = await api.get(`/orders/${orderId}`);

        formRef.current.setData(res.data);
        formRef.current.setFieldValue('recipient_id', {
          value: res.data.recipient.id,
          label: res.data.recipient.name,
        });
        formRef.current.setFieldValue('deliveryman_id', {
          value: res.data.deliveryman.id,
          label: res.data.deliveryman.name,
        });
      }
    }
    loadInitialData(id);
  }, [id]);

  const customStylesSelectInput = {
    control: provided => ({
      ...provided,
      height: 45,
    }),
  };

  async function loadRecipientOptions(inputValue, callback) {
    const res = await api.get('/recipients', {
      params: {
        q: inputValue,
      },
    });

    const data = res.data.map(recipient => ({
      value: recipient.id,
      label: recipient.name,
    }));

    callback(data);
  }

  async function loadDeliverymanOptions(inputValue, callback) {
    const res = await api.get('/deliverymans', {
      params: {
        q: inputValue,
      },
    });

    const data = res.data.map(deliveryman => ({
      value: deliveryman.id,
      label: deliveryman.name,
    }));

    callback(data);
  }

  async function handleSubmit(data, { reset }) {
    formRef.current.setErrors({});
    try {
      const schema = Yup.object().shape({
        product: Yup.string().required('O nome do produto é obrigatório'),
        recipient_id: Yup.string().required('O destinatário é obrigatório'),
        deliveryman_id: Yup.string().required('O entregador é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      if (id) {
        await api.put(`/orders/${id}`, {
          product: data.product,
          recipient_id: data.recipient_id,
          deliveryman_id: data.deliveryman_id,
        });
        history.push('/orders');
        toast.success('Encomenda editada com sucesso!');
      } else {
        await api.post('/orders', {
          product: data.product,
          recipient_id: data.recipient_id,
          deliveryman_id: data.deliveryman_id,
        });
        toast.success('Encomenda criada com sucesso!');
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
        <HeaderForm title="Cadastro de encomendas">
          <BackButton action={() => history.push('/orders')} />
          <SaveButton action={() => formRef.current.submitForm()} />
        </HeaderForm>

        <Unform ref={formRef} onSubmit={handleSubmit}>
          <section>
            <SelectInput
              type="text"
              label="Destinatário"
              name="recipient_id"
              placeholder="Destinatários"
              noOptionsMessage={() => 'Nenhum destinatário encontrado'}
              loadOptions={loadRecipientOptions}
              styles={customStylesSelectInput}
            />
            <SelectInput
              type="text"
              label="Entregador"
              name="deliveryman_id"
              placeholder="Entregadores"
              noOptionsMessage={() => 'Nenhum entregador encontrado'}
              loadOptions={loadDeliverymanOptions}
              styles={customStylesSelectInput}
            />
          </section>
          <InputSimple
            label="Nome do produto"
            name="product"
            type="text"
            placeholder="Nome do produto"
            onKeyPress={e =>
              e.key === 'Enter' ? formRef.current.submitForm() : null
            }
          />
        </Unform>
      </Content>
    </Container>
  );
}

OrderForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
