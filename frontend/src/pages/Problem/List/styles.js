import styled from 'styled-components';

import Button from '~/components/Form/Button';
import { colors } from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 120px;
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
  height: 630px;
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
export const ButtonF = styled(Button)`
  /* display: block; */
  width: 100px;
  height: 36px;

  &:disabled {
    cursor: not-allowed;
    background: #666;
  }
`;
