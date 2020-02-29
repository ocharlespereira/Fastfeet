import React, { useEffect, useState } from 'react';
import { MdAdd } from 'react-icons/md';

import { IconButton } from '~/components/Button';
import { InputSearch } from '~/components/Form';
import HeaderList from '~/components/HeaderList';
import api from '~/services/api';
import history from '~/services/history';

import DeliverymanItem from './ListItem';
import { Container, Content, Grid } from './styles';

// import { Container } from './styles';

export default function DeliverymanList() {
  const [deliveryman, setDeliveryman] = useState([]);
  const [page, setPage] = useState(1);

  async function loadDeliveryman() {
    const res = await api.get('/deliverymans', {
      params: { page },
    });

    setDeliveryman(res.data);
  }

  useEffect(() => {
    loadDeliveryman();
  }, [page]); //eslint-disable-line

  async function handleSearchDeliveryman(e) {
    setPage(1);

    const res = await api.get('/deliverymans', {
      params: {
        nameLike: e.target.value,
        page,
      },
    });

    setDeliveryman(res.data);
  }

  return (
    <Container>
      <Content>
        <HeaderList title="Gerenciamento de entregadores">
          <InputSearch
            onChange={handleSearchDeliveryman}
            type="text"
            placeholder="Buscar por entregadores"
          />
          <IconButton
            Icon={MdAdd}
            title="CADASTRAR"
            type="button"
            action={() => history.push('/deliveryman/new')}
          />
        </HeaderList>

        <Grid>
          <section>
            <strong>ID</strong>
            <strong>Foto</strong>
            <strong>Nome</strong>
            <strong>Email</strong>
            <strong>Ações</strong>
          </section>
          {deliveryman.map(deliveryman => (
            <DeliverymanItem
              key={deliveryman.id}
              data={deliveryman}
              updateDeliveryman={loadDeliveryman}
            />
          ))}
        </Grid>
      </Content>
    </Container>
  );
}
