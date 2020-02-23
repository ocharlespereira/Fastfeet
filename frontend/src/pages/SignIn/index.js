import React from 'react';

// import { Container } from './styles';
import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="FastFeet" />

      <form>
        <div>
          <span>SEU E-MAIL</span>
          <input type="email" placeholder="exemplo@email.com" />
          <span>SUA SENHA</span>
          <input type="password" placeholder="*************" />

          <button type="submit">Entrar no sistema</button>
        </div>
      </form>
    </>
  );
}
