import styled from 'styled-components/native';

import Text from '~/components/Text';
import { colors } from '~/styles/colors';

export const Container = styled.View`
  margin-top: 15px;
  margin-bottom: 30px;
  border-radius: 4px;
  border: 1px solid ${colors.border};
`;
export const Description = styled(Text)`
  color: #000;
`;
export const Date = styled(Text)`
  color: #000;
`;
