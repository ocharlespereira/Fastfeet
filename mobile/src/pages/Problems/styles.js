import styled from 'styled-components/native';

import Text from '~/components/Text';
import { colors } from '~/styles/colors';

export const Container = styled.View`
  background: #fff;
  flex: 1;
`;

export const Background = styled.View`
  background: ${colors.primary};
  height: 20%;
`;

export const Content = styled.View`
  margin-top: -70px;
  padding: 0 20px;
`;

export const Title = styled(Text)`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;
