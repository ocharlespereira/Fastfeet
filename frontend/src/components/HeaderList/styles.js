import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const Container = styled.div`
  h1 {
    margin-bottom: 35px;
    color: ${colors.title};
    font-size: 24px;
    font-weight: bold;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 25px;
`;
