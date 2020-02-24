import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

import { Container, Content, Profile, Menu } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Fastfeet" />
          </Link>
        </nav>

        <Menu>
          <ul>
            <li>
              <Link to="/orders">ENCOMENDAS</Link>
            </li>
            <li>
              <Link to="/deliverymans">ENTREGADORES</Link>
            </li>
            <li>
              <Link to="/recipients">DESTINATÁRIOS</Link>
            </li>
            <li>
              <Link to="/problems">PROBLEMAS</Link>
            </li>
          </ul>
        </Menu>

        <Profile>
          <strong>Admin Fastfeet</strong>
          <Link to="/">Sair do sistema</Link>
        </Profile>
      </Content>
    </Container>
  );
}
