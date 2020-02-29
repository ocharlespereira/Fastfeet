import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const Container = styled.div`
  width: 240px;
  height: 36px;
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid ${colors.dd};
  border-radius: 4px;

  svg {
    margin-right: 5px;
    margin-left: 5px;
  }

  input {
    width: 100%;
    font-size: 14px;
    border: 0;
    background: none;
    color: ${colors.title};

    ::placeholder {
      color: ${colors.input};
    }
  }
`;
