import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  height: 64px;
  background: #fff;
  padding: 0 30px;
  border: 2px solid #eee;
`;

export const Content = styled.div`
  max-width: 1440px;
  height: 63px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      li {
        flex-direction: row;
        margin-right: 20px;
        justify-content: center;
        align-items: center;
        display: inline;
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
  max-width: 100%;
  margin: auto;
  height: 64px;
  align-items: center;

  div {
    text-align: right;

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
