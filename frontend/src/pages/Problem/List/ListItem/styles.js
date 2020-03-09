import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 0.5fr;
  height: 57px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 25px;
  padding-right: 13px;
  background: #fff;
  border-radius: 4px;

  img {
    width: 35px;
    height: 35px;
    align-self: center;
    border-radius: 50%;
  }

  > small {
    font-size: 16px;
    color: ${colors.label};
    text-align: left;
    margin: auto 0;
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
      background: none;
      border: none;
      display: flex;
    }

    svg {
      margin-right: 8px;
    }

    span {
      font-size: 14px;
      color: ${colors.input};
    }
  }

  > div:first-child {
    padding-bottom: 9px;
    border-bottom: 1px solid ${colors.border};
  }

  div:nth-last-child(1) {
    padding-top: 9px;
  }
`;
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;

  strong {
    color: ${colors.input};
    font-size: 14px;
    margin-bottom: 5px;
  }

  p {
    font-size: 16px;
    color: ${colors.label};
    line-height: 26px;
  }
`;
