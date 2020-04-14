import styled from 'styled-components/native';

import Text from '~/components/Text';
import { colors } from '~/styles/colors';

export const Container = styled.View`
  margin-top: 15px;
  margin-bottom: 30px;
  border-radius: 4px;
  border: 1px solid ${colors.border};
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
`;

export const Title = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.primary};
  margin-left: 10px;
`;

export const Details = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: ${colors.bg_delivery};
  margin-top: 20px;
  padding: 20px;
`;

export const Detail = styled.View`
  justify-content: flex-end;
`;

export const TextDetail = styled(Text)`
  font-size: 10px;
  color: ${colors.input};
`;

export const TitleDetail = styled(Text)`
  font-size: 12px;
  color: ${colors.label};
  font-weight: bold;
`;

export const TextLink = styled(Text)`
  color: ${colors.primary};
`;
