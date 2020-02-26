import React from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';

import ActionProblem from '~/components/Actions/Problem';

import {
  Container,
  OrderControls,
  Button,
  SearchInput,
  Content,
  OrderTable,
} from './styles';

export default function Problem() {
  return (
    <Container>
      <h1>Gerenciando destinatários</h1>

      <OrderControls>
        <SearchInput>
          <MdSearch size={18} color="#999" />
          <input name="search" placeholder="Buscar por destinatários" />
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
              <th>Problema</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>#01</td>
              <td>Infelizmente sofri um acidente que danificou a encomenda</td>
              <td>
                <ActionProblem />
              </td>
            </tr>
          </tbody>
        </OrderTable>
      </Content>
    </Container>
  );
}
