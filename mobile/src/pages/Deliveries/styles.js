import styled from 'styled-components';

import Text from '~/components/Text';
import { colors } from '~/styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;
export const Profile = styled.View`
  justify-content: flex-start;
  flex-direction: row;
  margin-top: 20.5px;
`;
export const Welcome = styled(Text)`
  margin: 12px 0 0 12px;
  font-size: 16px;
`;
export const Name = styled(Text).attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})``;
export const ActionContainer = styled.View``;
export const TitleContainer = styled.View``;
export const Menu = styled.View``;
export const MenuTitle = styled(Text)``;
export const Options = styled.View``;
export const Option = styled(Text)``;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;
