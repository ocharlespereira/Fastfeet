import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  display: block;
  text-align: left;
  color: ${colors.title};
  font-weight: bold;
  margin-bottom: 9px;
`;
export const Error = styled.span`
  color: ${colors.danger};
  margin-top: 8px;
`;
