import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { MdDone } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Form, Input, Row, FormGroup, Label } from '@rocketseat/unform';

import {
  Container,
  OrderControls,
  OrderButtons,
  Button,
  Content,
  Column,
} from './styles';

export default function RecipientForm() {
  return (
    <Container>
      <OrderControls>
        <h1>Cadastro de destinatário</h1>
        <OrderButtons>
          <Button className="disable" as={Link} to="/recipients">
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
        <Form>
          <div>
            <strong>Nome</strong>
            <Input name="name" />
          </div>
          <Row>
            <Column mobile="12" desktop="6">
              <FormGroup>
                <Label>Rua</Label>
                <Input name="street" placeholder="Rua Beethoven" />
              </FormGroup>
            </Column>
            <Column mobile="12" desktop="3">
              <FormGroup>
                <Label>Número</Label>
                <Input type="number" name="number" placeholder="1729" />
              </FormGroup>
            </Column>
            <Column mobile="12" desktop="3">
              <FormGroup>
                <Label>Complemento</Label>
                <Input name="complement" placeholder="Casa" />
              </FormGroup>
            </Column>
          </Row>
        </Form>
      </Content>
    </Container>
  );
}
