import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  border-bottom: 2px solid #eee;
`;

export const Content = styled.div`
  max-width: 100%;
  width: 1440px;
  height: 64px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex: 1;

  nav {
    display: flex;
    align-items: center;
    margin-right: 20px;
    padding-right: 20px;
    border-right: 1px solid #eee;
  }
`;

export const Menu = styled.div`
  ul {
    display: flex;
  }

  li {
    margin-right: 10px;
    padding-right: 10px;
    font-size: 15px;
    font-weight: bold;
    opacity: 1;
  }

  a {
    color: #999999;

    &:hover {
      color: ${darken(0.01, '#7d40e7')};
    }
  }
`;

export const Profile = styled.div`
  display: column;
  text-align: right;
  margin-left: 606px;

  strong {
    display: block;
    font-size: 14px;
    color: #666666;
    opacity: 1;
  }

  a {
    display: block;
    margin-top: 2px;
    font-size: 14px;
    color: #de3b3b;
    opacity: 1;
  }
`;
