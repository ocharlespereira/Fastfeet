import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1.5fr 2fr 1.5fr 1.5fr 1fr 1fr;
  height: 57px;
  background: #fff;
  border-radius: 4px;
  padding-left: 25px;
  padding-right: 13px;

  > small {
    display: flex;
    align-items: center;
    text-align: left;
    font-size: 16px;
    color: ${colors.label};

    div {
      display: flex;
      margin-right: 3px;

      img {
        text-align: left;
        align-items: center;
        width: 35px;
        height: 35px;
        border-radius: 50%;
      }
    }

    &:last-child {
      text-align: right;
    }
  }

  > section {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;
export const ActionContainer = styled.div`
  padding: 10px;

  > div {
    display: flex;
    align-items: center;
    padding-bottom: 6px;

    button {
      background: none;
      border: none;

      display: flex;
    }

    svg {
      margin-right: 8px;
    }

    span {
      font-size: 16px;
      color: ${colors.input};
    }

    :nth-last-child(-n + 2) {
      padding-top: 6px;
      border-top: 1px solid ${colors.border};
    }

    :nth-last-child(1) {
      padding-bottom: 0;
    }
  }
`;
