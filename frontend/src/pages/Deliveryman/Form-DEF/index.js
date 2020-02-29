import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { MdDone } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';

import AvatarInput from '~/pages/Deliveryman/AvatarInput';

import {
  Container,
  OrderControls,
  OrderButtons,
  Button,
  Content,
} from './styles';

export default function DeliverymanForm() {
  return (
    <Container>
      <OrderControls>
        <h1>Cadastro de entregadores</h1>
        <OrderButtons>
          <Button className="disable" as={Link} to="/deliverymans">
            <IoIosArrowBack size={20} color="#FFF" />
            VOLTAR
          </Button>
          <Button>
            <MdDone size={20} color="#FFF" />
            SALVAR
          </Button>
        </OrderButtons>
      </OrderControls>

      <Content>
        <AvatarInput name="avatar_id" />

        <Form>
          <div>
            <strong>Nome</strong>
            <Input name="name" />
          </div>
          <div>
            <strong>Email</strong>
            <Input name="email" />
          </div>
        </Form>
      </Content>
    </Container>
  );
}
