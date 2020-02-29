import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  input[type='file'] {
    display: none;
  }
`;

export const ContentPreview = styled.div`
  display: flex;
  justify-content: center;
`;

export const PreviewDefault = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px dashed ${colors.border};
  opacity: 1;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  cursor: pointer;
`;

export const PreviewDefaultError = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed red;
  opacity: 1;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  p {
    color: red;
  }
`;

export const PreviewText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.border};
`;

export const Preview = styled.div`
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
`;
