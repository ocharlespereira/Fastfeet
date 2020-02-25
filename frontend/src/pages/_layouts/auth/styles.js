import { darken } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 1440px;
  background: #fff;
  text-align: center;
  border-radius: 4px;
  opacity: 1;

  img {
    padding: 40px 0 20px 0;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  div {
    padding: 10px 10px 30px 10px;
    text-align: center;
    flex-direction: column;
  }

  strong {
    text-align: left;
    display: flex;
    margin-left: 20px;
    color: #444444;
    font-weight: bold;
    opacity: 1;
  }

  input {
    display: flex;
    width: 300px;
    height: 40px;
    background: #ffff;
    border: 1px solid #dddd;
    border-radius: 4px;
    opacity: 1;
    padding: 10px;
    color: #666;
    margin-left: 20px;
    margin-bottom: 10px;
  }

  span {
    display: flex;
    color: #de3b3b;
    text-align: left;
    font-weight: bold;
    margin-left: 20px;
  }

  button {
    margin: 5px 0 0;
    width: 300px;
    height: 45px;
    background: #7d40e7;
    border: 0;
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
    color: #fff;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.15, '#7d40e7')};
    }
  }
`;
