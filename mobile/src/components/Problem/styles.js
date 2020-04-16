import styled from 'styled-components/native';

import Text from '~/components/Text';
import { colors } from '~/styles/colors';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: #fff;
  padding: 20px;
  margin-top: -10px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid ${colors.border};
`;
export const Description = styled(Text)`
  font-size: 14px;
  color: ${colors.input};
`;
export const Date = styled(Text)`
  font-size: 12px;
  color: #c1c1c1;
`;
