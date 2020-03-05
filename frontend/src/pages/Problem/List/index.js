import React, { useState, useEffect } from 'react';

import HeaderList from '~/components/HeaderList';
import api from '~/services/api';

import ProblemItem from './ProblemItem';
import { Container, Content, Grid } from './styles';

export default function ProblemList() {
  const [page, setPage] = useState(1);
  const [problems, setProblems] = useState([]);

  async function loadProblems() {
    const res = await api.get('/problems', {
      params: {
        page,
      },
    });

    setProblems(res.data);
  }

  useEffect(() => {
    loadProblems();
  }, [page]); //eslint-disable-line

  return (
    <Container>
      <Content>
        <HeaderList title="Problemas na entrega" />

        <Grid>
          <section>
            <strong>Encomenda</strong>
            <strong>Problema</strong>
            <strong>Ações</strong>
          </section>
          {problems.map(problem => {
            <ProblemItem
              key={problem.id}
              data={problem}
              updateProblems={loadProblems}
            />;
          })}
        </Grid>
      </Content>
    </Container>
  );
}
