import { BaseButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native';

import Text from '../Text'

export const Container = styled(BaseButton)`
  height: 46px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const TextButton = styled(Text)`
  color: #FFF;
  font-weight: bold;
  font-size: 16px;
`;
