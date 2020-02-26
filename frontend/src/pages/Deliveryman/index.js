import React from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';

import ActionDeliveryman from '~/components/ActionDeliveryman';

import {
  Container,
  OrderControls,
  Button,
  SearchInput,
  Content,
  OrderTable,
} from './styles';

export default function Deliveryman() {
  return (
    <Container>
      <h1>Gerenciando entregadores</h1>

      <OrderControls>
        <SearchInput>
          <MdSearch size={18} color="#999" />
          <input name="search" placeholder="Buscar por entregadores" />
        </SearchInput>
        <Button as={Link} to="/orders/new">
          <MdAdd size={20} color="#FFF" />
          Cadastrar
        </Button>
      </OrderControls>

      <Content>
        <OrderTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>Foto</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>#01</td>
              <td>
                <span>CH</span>
              </td>
              <td>
                <strong>Charles Pereira</strong>
              </td>
              <td>charles@teste.com</td>
              <td>
                <ActionDeliveryman />
              </td>
            </tr>
          </tbody>
        </OrderTable>
      </Content>
    </Container>
  );
}
