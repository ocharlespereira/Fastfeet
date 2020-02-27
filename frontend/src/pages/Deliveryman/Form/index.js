import React from 'react';
import { IoIosArrowBack, IoMdImages } from 'react-icons/io';
import { MdDone } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';

import {
  Container,
  OrderControls,
  OrderButtons,
  Button,
  Content,
  Imagem,
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
        <Imagem>
          <img src="" alt="" />
          <IoMdImages size={20} color="#FFF" />
          <small>Adicionar foto</small>
        </Imagem>

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
