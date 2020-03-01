import { Form } from '@unform/web';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 900px;
`;
export const Unform = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 25px 30px;
  border-radius: 4px;

  > section {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 16px;

    > div:first-child {
      margin-right: 30px;
    }
  }
`;
