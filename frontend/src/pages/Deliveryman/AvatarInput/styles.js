import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  text-align: center;
  margin-bottom: 10px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      border: 3px dashed #dddddd;
      background: #fff;
    }

    input {
      display: none;
    }
  }
`;
