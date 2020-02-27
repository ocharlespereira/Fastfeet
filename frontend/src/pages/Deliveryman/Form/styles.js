import { darken } from 'polished';
import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  max-width: 900px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;

  h1 {
    display: left;
    font-size: 24px;
    color: ${colors.title};
  }
`;
export const Imagem = styled.div``;

export const OrderControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
  /* margin-top: 35px;
  margin-bottom: 20px; */
`;
export const OrderButtons = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin-top: 35px;
  margin-bottom: 20px; */
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  background: ${colors.primary};
  font-weight: bold;
  color: #fff;
  font-size: 14px;
  padding: 8px 15px;
  margin-left: 16px;
  border-radius: 4px;
  transition: (background 0.3s);
  border: none;

  &.disable {
    background: ${colors.disabled};
  }

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

export const Content = styled.div`
  border-radius: 4px;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
`;
// export const SearchInput = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
//   height: 36px;

//   background: #fff;

//   padding-left: 5px;
//   border: 1px solid ${colors.second};
//   border-radius: 4px;
//   min-width: 235px;

//   input {
//     border: 0;
//     height: 100%;
//     color: ${colors.input};
//   }
// `;
