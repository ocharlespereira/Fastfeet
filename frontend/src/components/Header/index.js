/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import logoHeader from '~/assets/logoHeader.svg';
import { signOut } from '~/store/modules/auth/actions';
import colors from '~/styles/colors';

import { Container, Content, Profile, Menu } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logoHeader} alt="Fastfeet" />
          </Link>

          <div>
            <li>
              <Menu activeStyle={{ colors: colors.linkActive }} to="/orders">
                ENCOMENDAS
              </Menu>
            </li>
            <li>
              <Menu
                activeStyle={{ colors: colors.linkActive }}
                to="/deliverymans"
              >
                ENTREGADORES
              </Menu>
            </li>
            <li>
              <Menu
                activeStyle={{ colors: colors.linkActive }}
                to="/recipients"
              >
                DESTINATÁRIOS
              </Menu>
            </li>
            <li>
              <Menu activeStyle={{ colors: colors.linkActive }} to="/problems">
                PROBLEMAS
              </Menu>
            </li>
          </div>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <span onClick={handleSignOut}>sair do sistema</span>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
