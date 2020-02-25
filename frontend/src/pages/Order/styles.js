import { darken } from 'polished';
import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  max-width: 100%;
  margin: 30px 50px;
  margin-left: 120px;
  display: flex;
  flex-direction: column;

  h1 {
    display: block;
    font-size: 24px;
    color: ${colors.title};
  }
`;
export const OrderControls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
  margin-bottom: 20px;
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  background: ${colors.primary};
  font-weight: bold;
  color: #fff;
  font-size: 14px;
  padding: 8px 15px;
  border-radius: 4px;
  transition: (background 0.3s);
  border: none;

  &:hover {
    background: ${darken(0.1, '#7D40E7')};
  }

  &.disabled {
    cursor: default;
    opacity: 0.65;
  }

  svg {
    margin-right: 5px;
  }

  &.secondary {
    background: #ccc;
    &:hover {
      background: ${darken(0.08, '#ccc')};
    }
  }
`;

export const SearchInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 36px;

  background: #fff;

  padding-left: 5px;
  border: 1px solid ${colors.second};
  border-radius: 4px;
  min-width: 235px;

  input {
    border: 0;
    height: 100%;
    color: ${colors.input};
  }
`;
export const Content = styled.div`
  border-radius: 4px;
  margin-top: 20px;
`;

export const OrderTable = styled.table`
  width: 100%;
  border-spacing: 0;
  margin-bottom: 20px;

  thead th {
    &:nth-child(3) {
        width: 25%;
      }
    margin-top: 15px;
    text-align: left;
    margin-bottom: 20px;
  }
  tbody {
    background: #fff;
    border-top: 20px solid #f5f5f5;
    
    
    td {
      &:nth-child(3) {
        width: 25%;
      }
      padding: 22px 0;
      margin: 10px 0;
      border-top: 10px solid #f5f5f5;
      border-bottom: 10px solid #f5f5f5;
      border-radius: 4px;
      background: red;

      p {
        position: relative;
        display: flex;
        align-items: center;
        text-align: center;
        margin: left;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: #EBFBFA;
        color: #A28FD0; 
        font-weight: bold;

      }
    }
  }

  tbody tr:last-child {
    td {
      border-bottom: none;
    }
`;
