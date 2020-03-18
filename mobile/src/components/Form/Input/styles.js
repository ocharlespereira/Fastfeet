import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background: #fff;
  border-radius: 4px;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  height: 45px;
  font-family: 'Roboto-Regular';
  margin-left: 20px;
`;
