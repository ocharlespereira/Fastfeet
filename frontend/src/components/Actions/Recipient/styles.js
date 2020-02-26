import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;
export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;
`;
export const ListActions = styled.div`
  position: absolute;
  width: 130px;
  left: calc(50% - 65px);
  top: calc(100% + 5px);
  background: #fff;
  box-shadow: 0px 0px 2px #00000026;
  border-radius: 4px;
  padding: 5px;

  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    top: -10px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #f8f8f8;
  }
`;
export const Actions = styled.div`
  align-items: center;
  display: flex;
  padding: 7px;

  /** border-top.
   */
  & + div {
    border-top: 1px solid #eeeeee;
  }

  button {
    margin-left: 5px;
    color: #999999;
    border: none;
    background: none;
    text-align: center;
    font-size: 16px;
  }
`;
