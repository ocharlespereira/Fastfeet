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
  color: ${colors.label};
`;

export const Name = styled(Text).attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.font};
  margin: 0 0 0 12px;
`;

export const ActionContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const TitleContainer = styled.View`
  flex: 3;
`;

export const Menu = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: baseline;
  margin-top: 22.5px;
  padding: 0 20px;
`;

export const MenuTitle = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.font};
`;

export const Options = styled.View`
  flex-direction: row;
`;
export const Option = styled(Text)`
  font-size: 12px;
  font-weight: bold;
  color: ${props => (props.selected ? colors.primary : colors.input)};
  text-decoration: ${props => (props.select ? 'underline' : 'none')};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;
