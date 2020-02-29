import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1.1fr 2fr 2fr 1fr;
  height: 57px;
  padding-right: 13px;
  padding-left: 25px;

  background: #fff;
  border-radius: 4px;
  margin-bottom: 20px;

  img {
    /* width: 35px;
    height: 35px;
    align-self: center;
    border-radius: 50%; */
  }

  > small {
    margin: auto 0;
    font-size: 16px;
    color: ${colors.label};
    text-align: left;
  }

  > small:last-child {
    text-align: right;
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

    button {
      display: flex;
      background: none;
      border: none;
    }

    svg {
      font-size: 16px;
    }

    span {
      color: ${colors.input};
    }
  }

  div:first-child {
    padding-bottom: 9px;
    border-bottom: 1px solid ${colors.border};
  }

  div:nth-last-child(1) {
    padding-top: 9px;
  }
`;
