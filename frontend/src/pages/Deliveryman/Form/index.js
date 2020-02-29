import React, {useEffect, useRef} from 'react';
import {toast} from 'react-toastify';
import api from '~/services/api'
import * as Yup from 'yup';

import Proptypes from 'prop-types';

import { SaveButton, BackButton } from '~/components/Button';
import { InputSimple, ImageInput } from '~/components/Form';
import HeaderForm from '~/components/HeaderForm';

import { Container, Content, UnForm } from './styles';

export default function DeliverymanForm({match}) {
  const {id} = match.params;
  const formRef = useRef(null);

  useEffect(() => {
    async function loadInitialData(deliverymanId) {
      if (id) {
        const res = await api.get(`/deliveryman/${deliverymanId}`);

        formRef.current.setData(res.data);
        formRef.current.setFieldValue('avatar', res?.data?.avatar?.url);
      }
    }

    loadInitialData(id);
  }, [id]);

  return (
    <Container>
      <Content>
        <HeaderForm title="Cadastro de entregadores">
          <BackButton />
          <SaveButton action="" />
        </HeaderForm>
        <UnForm>
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
