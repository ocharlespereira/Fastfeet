import styled from 'styled-components';

import { photoColors } from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  align-self: center;
  background: ${props => photoColors[props.number].color};
  color: ${props => photoColors[props.number].bg};

  span {
    font-size: 16px;
  }
`;
