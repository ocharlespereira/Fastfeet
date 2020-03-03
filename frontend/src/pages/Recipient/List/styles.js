import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const Container = styled.div`
  justify-content: center;
  padding: 0 20px;
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;

  > section {
    justify-content: space-between;
    display: flex;
    margin-top: 15px;
  }
`;

export const Grid = styled.div`
  /* height: 400px; */
  > section {
    display: grid;
    grid-template-columns: 0.5fr 1.5fr 2fr 0.5fr;
    padding-left: 25px;
    padding-right: 13px;
    padding-right: 13px;
    margin-bottom: 15px;

    strong:last-child {
      text-align: right;
    }

    strong {
      font-size: 16px;
      color: ${colors.title};
    }
  }

  > div + div {
    margin-top: 20px;
  }
`;
