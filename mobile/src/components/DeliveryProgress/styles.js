import styled from 'styled-components/native';

import Text from '~/components/Text';
import { colors } from '~/styles/colors';

export const Container = styled.View`
  margin-top: 25px;
`;

export const ProgressContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 40px;
  align-items: center;
`;

export const Ball = styled.View`
  height: 10px;
  width: 10px;
  border-radius: 5px;
  /* cria os pontos de acordo com o status de entrega */
  background: ${props => (props.marked ? colors.primary : '#fff')};
  border: 1px solid ${colors.primary};
`;

export const Line = styled.View`
  height: 1px;
  flex: 1px;
  background: ${colors.primary};
`;

export const Descriptions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 20px;
`;
export const Description = styled(Text)`
  font-size: 10px;
  color: ${colors.input};
  text-align: center;
`;
