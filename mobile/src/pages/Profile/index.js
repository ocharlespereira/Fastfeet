/* eslint-disable prettier/prettier */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Avatar,
  Content,
  NamePhoto,
  Details,
  Label,
  Information,
  LogoutButton,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector(state => state?.user?.profile);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        {user?.avatar ? (
          <Avatar source={{ uri: user?.avatar?.url }} />
        ) : (
            <>{user?.name && <NamePhoto name={user?.name} />}</>
          )}

        <Details>
          <Label>Name Completo</Label>
          <Information>{user?.name}</Information>
          <Label>Email</Label>
          <Information>{user?.email}</Information>
          <Label>Data de cadastro</Label>
          <Information>{user?.created_at}</Information>
        </Details>

        <LogoutButton onPress={handleLogout} loading={false}>
          Logout
        </LogoutButton>
      </Content>
    </Container >
  );
}
