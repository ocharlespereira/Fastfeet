import React from 'react';
import { MdAdd } from 'react-icons/md';

import { IconButton } from '~/components/Button';
import { InputSearch } from '~/components/Form';
import HeaderList from '~/components/HeaderList';
import api from '~/services/api';
import history from '~/services/history';

import DeliverymanItem from '../ListItem';
import { Container, Content, Grid } from './styles';

// import { Container } from './styles';

export default function DeliverymanList() {
  return (
    <Container>
      <Content>
        <HeaderList title="Gerenciamento de entregadores">
          <InputSearch type="text" placeholder="Buscar por entregadores" />
          <IconButton Icon={MdAdd} title="CADASTRAR" action="" type="button" />
        </HeaderList>

        <Grid>
          <section>
            <strong>ID</strong>
            <strong>Foto</strong>
            <strong>Nome</strong>
            <strong>Email</strong>
            <strong>Ações</strong>
          </section>
          <DeliverymanItem />
        </Grid>
      </Content>
    </Container>
  );
}
