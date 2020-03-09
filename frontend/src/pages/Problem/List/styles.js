import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 1200px;

  > section {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
`;
export const Grid = styled.div`
  height: 40px;
  margin-bottom: 20px;

  > section {
    display: grid;
    grid-template-columns: 1fr 2fr 0.5fr;
    padding-left: 25px;
    padding-right: 13px;

    strong {
      font-size: 16px;
      color: ${colors.title};
    }

    strong:last-child {
      text-align: right;
    }

    > div + div {
      margin-top: 20px;
    }
  }
`;
