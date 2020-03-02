import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';

import { IconButton } from '~/components/Button';
import { InputSearch } from '~/components/Form';
import HeaderList from '~/components/HeaderList';
import api from '~/services/api';
import history from '~/services/history';

import RecipientItem from './ListItem';
import { Container, Content, Grid } from './styles';

export default function RecipientList() {
  const [page, setPage] = useState(1);
  const [recipients, setRecipients] = useState([]);

  async function loadRecipients() {
    const response = await api.get('/recipients', {
      params: {
        page,
      },
    });

    setRecipients(response.data);
  }

  useEffect(() => {
    loadRecipients();
  }, [page]); // eslint-disable-line

  async function handleSearchRecipient(e) {
    setPage(1);

    const response = await api.get('/recipients', {
      params: {
        nameLike: e.target.value,
        page,
      },
    });

    setRecipients(response.data);
  }

  return (
    <Container>
      <Content>
        <HeaderList title="Gerenciando destinatários">
          <InputSearch
            type="text"
            placeholder="Buscar por destinatários"
            onChange={handleSearchRecipient}
          />
          <IconButton
            Icon={MdAdd}
            title="CADASTRAR"
            action={() => history.push('/recipient/new')}
            type="button"
          />
        </HeaderList>
        <Grid>
          <section>
            <strong>ID</strong>
            <strong>Nome</strong>
            <strong>Endereço</strong>
            <strong>Ações</strong>
          </section>
          {recipients.map(recipient => (
            <RecipientItem
              updateRecipients={loadRecipients}
              key={recipient.id}
              data={recipient}
            />
          ))}
        </Grid>
      </Content>
    </Container>
  );
}
