import React from 'react';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Description, Date } from './styles';

export default function Problem({ data }) {
  return (
    <Container>
      <Description>{data.description}</Description>
      <Date>
        {data.createdAt
          ? format(parseISO(data.createdAt), "dd'/'MM'/'yyyy", { locale: pt })
          : '--/--/--'}
      </Date>
    </Container>
  );
}
