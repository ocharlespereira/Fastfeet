import React, { useRef } from 'react';
import { Image, StatusBar } from 'react-native';

import { Form } from '@unform/mobile';

import logo from '~/assets/logo.png';
import colors from '~/styles/colors';

import { Container, Input, SubmitButton } from './styles';

export default function SignIn() {
  const formRef = useRef(null);
  const loading = {};
  function handleSubmit() { }

  return (
    <Container>
      <StatusBar backgroundColor={colors.primary} />
      <Image source={logo} />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="id"
          keyboardType="number-pad"
          placeholder="Informe seu ID no cadastro"
          autoCorrect={false}
          returnKeyType="Entrar"
          autoCapitalize="none"
        />
        <SubmitButton
          loading={loading}
          onPress={() => formRef.current.submitForm()}
        >
          Entrar no sistema
        </SubmitButton>
      </Form>
    </Container>
  );
}
