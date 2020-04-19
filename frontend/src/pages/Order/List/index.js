import React, { useEffect, useState } from 'react';
import { MdAdd } from 'react-icons/md';

import { parseISO, format } from 'date-fns';

import { IconButton } from '~/components/Button';
import { InputSearch } from '~/components/Form';
import HeaderList from '~/components/HeaderList';
import api from '~/services/api';
import history from '~/services/history';

import OrderItem from './ListItem';
import { Container, Content, Grid, ButtonF } from './styles';

export default function OrderList() {
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);

  // formatação de data
  function formatDates(data) {
    return data.map(order => ({
      ...order,
      start_dateFormated: order.start_dateFormated
        ? format(parseISO(order.start_date), 'dd/MM/yyyy')
        : null,
      end_dateFormated: order.end_dateFormated
        ? format(parseISO(order.end_date), 'dd/MM/yyy')
        : null,
    }));
  }

  // conexão com o backend para fazer params query (pesquisa)
  async function handleSearchOrder(e) {
    setPage(1);
    const res = await api.get('/orders', {
      params: {
        nameProductLike: e.target.value,
      },
    });

    // ativa função para formação de datas
    const data = formatDates(res.data);

    setOrders(data);
  }

  // chama api para paginação
  async function loadOrders() {
    const response = await api.get('/orders', {
      params: {
        page,
      },
    });

    const data = formatDates(response.data);

    setOrders(data);
  }

  useEffect(() => {
    loadOrders();
  }, [page]); //eslint-disable-line

  return (
    <Container>
      <Content>
        <HeaderList title="Gerenciamento de encomendas">
          <InputSearch
            type="text"
            placeholder="Buscar por encomendas"
            onChange={handleSearchOrder}
          />
          <IconButton
            Icon={MdAdd}
            title="CADASTRAR"
            action={() => history.push('/order/new')}
            type="button"
          />
        </HeaderList>
        <Grid>
          <section>
            <strong>ID</strong>
            <strong>Destinatário</strong>
            <strong>Entregador</strong>
            <strong>Cidade</strong>
            <strong>Estado</strong>
            <strong>Status</strong>
            <strong>Ações</strong>
          </section>
          {orders.map(order => (
            <OrderItem updateOrders={loadOrders} key={order.id} data={order} />
          ))}
        </Grid>
        <section>
          <ButtonF
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            type="button"
          >
            voltar
          </ButtonF>
          <ButtonF
            disabled={orders.length < 5}
            type="button"
            onClick={() => setPage(page + 1)}
          >
            proximo
          </ButtonF>
        </section>
      </Content>
    </Container>
  );
}
