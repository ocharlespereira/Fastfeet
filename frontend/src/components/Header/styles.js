import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const Container = styled.div`
  max-width: 100%;
  background: #fff;
  padding: 0 30px;
  border: 2px solid ${colors.border};
  margin-bottom: 35px;
`;

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 135px;
      height: 26px;
      margin-right: 30px;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Menu = styled.div`
  padding-left: 30px;
  height: 32px;
  border-left: 1px solid ${colors.border};

  display: flex;
  align-items: center;

  a {
    margin-right: 20px;
    font-size: 15px;
    font-weight: bold;
    color: ${colors.input};
    transition: color 0.2s;

    &.active {
      color: ${colors.title};
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  strong {
    font-weight: bold;
    color: ${colors.label};
    margin-bottom: 5px;
  }

  button {
    border: 0;
    background: none;
    color: ${colors.danger};
    transition: color 0.2s;

    &:hover {
      color: ${colors.primary};
    }
  }
`;
