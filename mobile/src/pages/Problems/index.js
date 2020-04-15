import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { useRoute } from '@react-navigation/native';

import Problem from '~/components/Problem';
import api from '~/services/api';

import { Container, Background, Content, Title, List } from './styles';

export default function Problems() {
  const [problems, setProblems] = useState([]);
  const route = useRoute();
  const { orderId } = route.params;

  useEffect(() => {
    async function loadProblems() {
      try {
        const response = await api.get(`/delivery/${orderId}/problems`);
        setProblems(response.data);
      } catch (error) {
        Alert.alert(
          'Não foi possível carregar os problemas',
          'Tente novamente'
        );
      }
    }

    loadProblems();
  }, [orderId]);

  return (
    <Container>
      <Background />

      <Content>
        <Title>Encomenda 0{orderId}</Title>
        <List
          data={problems}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Problem data={item} />}
        />
      </Content>
    </Container>
  );
}
