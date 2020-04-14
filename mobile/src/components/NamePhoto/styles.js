import styled from 'styled-components/native';

import { photoColors } from '~/styles/colors';

import Text from '../Text';

export const Container = styled.View`
  height: 68px;
  width: 68px;
  border-radius: 34px;
  align-self: center;
  align-items: center;
  justify-content: center;
  background: ${props => photoColors[props.number].bg};
`;

export const TextPhoto = styled(Text)`
  font-size: 31px;
  color: ${props => photoColors[props.number].color};
`;
