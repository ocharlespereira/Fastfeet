import styled from 'styled-components';

import Button from '~/components/Form/Button';
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
  height: 630px;

  > section {
    display: grid;
    padding-left: 25px;
    padding-right: 13px;
    margin-bottom: 15px;
    grid-template-columns: 1.2fr 1.1fr 2fr 2fr 1fr;

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

export const ButtonF = styled(Button)`
  width: 100px;
  height: 36px;

  &:disabled {
    cursor: not-allowed;
    background: #666;
  }
`;
