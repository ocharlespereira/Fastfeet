import styled from 'styled-components/native';

import AvatarComponent from '~/components/Avatar';
import Button from '~/components/Button';
import NamePhotoComponent from '~/components/NamePhoto';
import Text from '~/components/Text';
import { colors } from '~/styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  justify-content: center;
`;
export const Avatar = styled(AvatarComponent)`
  height: 180px;
  width: 180px;
  border-radius: 66.6px;
`;

export const Content = styled.View`
  align-items: center;
  padding: 0 36px;
`;
export const NamePhoto = styled(NamePhotoComponent)`
  height: 137px;
  width: 137px;
  border-radius: 68.5px;
`;
export const Details = styled.View`
  width: 100%;
  padding-top: 40px;
`;
export const Label = styled(Text)`
  font-size: 12px;
  color: ${colors.label};
`;

export const Information = styled(Text)`
  font-size: 12px;
  font-weight: bold;
  color: ${colors.font};
  margin-bottom: 15px;
`;
export const LogoutButton = styled(Button)`
  height: 40px;
  width: 100%;
  background: ${colors.danger};
`;
