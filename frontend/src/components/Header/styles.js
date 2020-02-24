import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  border: 2px solid #eee;
`;

export const Content = styled.div`
  height: 64px;
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    text-align: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    ul {
      display: flex;
      justify-content: center;
      align-items: center;

      li {
        margin-right: 20px;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Menu = styled(NavLink).attrs(props => ({}))`
  font-weight: bold;
  color: #999999;
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #444444;
    }

    span {
      cursor: pointer;
      color: #de3b3b;
    }
  }
`;
