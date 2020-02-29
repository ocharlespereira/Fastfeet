import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const UnInput = styled.input`
  padding: 12px 15px;

  font-size: 16px;
  color: ${colors.title};
  border-radius: 4px;

  &::placeholder {
    color: ${colors.input};
  }

  height: 45px;
  border: 1px solid ${colors.border};
`;

export const Error = styled.span`
  color: ${colors.danger};
  margin-top: 8px;

  & + label {
    margin-top: 8px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  strong {
    color: ${colors.title};
    font-weight: bold;

    text-align: left;
    margin-bottom: 9px;
  }

  & + label {
    margin-top: 18px;
  }
`;
