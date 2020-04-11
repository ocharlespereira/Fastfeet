import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';

import Progress from '~/components/DeliveryProgress';
import { colors } from '~/styles/colors';

import {
  Container,
  TitleContainer,
  Title,
  Details,
  Detail,
  TextDetail,
  TitleDetail,
  TextLink,
} from './styles';

export default function Delivery({ data }) {
  const navigation = useNavigation();

  return (
    <Container>
      <TitleContainer>
        <Icon name="local-shipping" color={colors.primary} size={20} />
        <Title>Encomenda 0{data.id}</Title>
      </TitleContainer>

      {/* <Progress status={data.status} /> */}

      <Details>
        <Detail>
          <TitleDetail>Data</TitleDetail>
          <TextDetail>{data.start_date_formated}</TextDetail>
        </Detail>
        <Detail>
          <TitleDetail>Cidade</TitleDetail>
          <TextDetail>{data.recipient.city}</TextDetail>
        </Detail>
      </Details>
      <TextLink
        onPress={() => navigation.navigate('Detalhes', { Delivery: data })}
      >
        Ver Detalhe
      </TextLink>
    </Container>
  );
}
