import styled from 'styled-components';

import Text from '~/components/Text';
import { colors } from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Background = styled.View`
  height: 155px;
  background: ${colors.primary};
`;

export const Content = styled.View`
  margin-top: -60px;
`;

export const Card = styled.View`
  background: #fff;
  margin: 0 20px;
  margin-bottom: 10px;
  padding: 15px 30px 0 15px;
  border-radius: 4px;
  border: 1px solid ${colors.border};
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.primary};
  margin-left: 10px;
`;

export const Label = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.input};
  margin-bottom: 5px;
`;

export const Value = styled(Text)`
  font-size: 14px;
  color: ${colors.label};
  margin-bottom: 15px;
`;

export const Status = styled(Value)`
  /* letras minusculas */
  text-transform: capitalize;
`;

export const Menu = styled.View`
  height: 83px;
  flex-direction: row;
  margin: 0 20px;
  background: ${colors.bg_delivery};
  border-radius: 4px;
  border: 1px solid ${colors.border};
`;

export const Option = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.border};
`;

export const OptionTitle = styled(Text)`
  font-size: 12px;
  color: ${colors.input};
  margin-top: 5px;
  text-align: center;
`;
