import React from 'react';
import { MdAdd, MdSearch, MdFiberManualRecord } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Action from '~/components/Actions/Order';

import {
  Container,
  OrderControls,
  Button,
  SearchInput,
  Content,
  OrderTable,
} from './styles';

export default function Profile() {
  return (
    <Container>
      <h1>Gerenciamento de Encomendas</h1>

      <OrderControls>
        <SearchInput>
          <MdSearch size={18} color="#999" />
          <input name="search" placeholder="Buscar por encomenda" />
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
              <th>Destinatário</th>
              <th>Entregador</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>#01</td>
              <td>Janaina de Souza</td>
              <td>
                <span>CH</span>
                <strong>Charles Pereira</strong>
              </td>
              <td>Uberlandia</td>
              <td>Minas Gerais</td>
              <td>
                <div className="status">
                  <MdFiberManualRecord size={10} color="#4D85EE" />
                  <small>Retirada</small>
                </div>
              </td>
              <td>
                <Action />
              </td>
            </tr>
            <tr>
              <td>#01</td>
              <td>Janaina de Souza</td>
              <td>
                <span>CH</span>
                <strong>Charles Pereira</strong>
              </td>
              <td>Uberlandia</td>
              <td>Minas Gerais</td>
              <td>
                <div className="status">
                  <MdFiberManualRecord size={10} color="#4D85EE" />
                  <small>Retirada</small>
                </div>
              </td>
              <td>
                <Action />
              </td>
            </tr>
          </tbody>
        </OrderTable>
      </Content>
    </Container>
  );
}
