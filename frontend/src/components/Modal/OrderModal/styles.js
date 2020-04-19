import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  img {
    height: 36px;
    margin-top: 25px;
  }

  > div {
    display: flex;
    flex-direction: column;

    :nth-child(1) {
      padding-bottom: 12px;
    }

    strong {
      margin-bottom: 4px;
      font-size: 16px;
      color: ${colors.title};
    }

    small {
      line-height: 25px;
      font-size: 16px;
      color: ${colors.label};
    }

    > div {
      > span {
        font-size: 16px;
        font-weight: bold;
        color: ${colors.label};
      }

      :nth-last-child(1) {
        margin-bottom: 10px;
      }
    }
  }

  > div + div {
    padding-top: 9px;
    border-top: 1px solid ${colors.border};
  }
`;
