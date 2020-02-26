import React, { useState } from 'react';
import { GoKebabHorizontal } from 'react-icons/go';
import { MdVisibility, MdModeEdit, MdDeleteForever } from 'react-icons/md';

import { Container, Badge, ListActions, Actions } from './styles';

export default function Action() {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <GoKebabHorizontal size={20} color="#C6C6C6" />
      </Badge>

      <ListActions visible={visible}>
        <Actions>
          <MdVisibility size={15} color="#8E5BE8" />
          <button type="submit">Visualizar</button>
        </Actions>
        <Actions>
          <MdModeEdit size={15} color="#4D85EE" />
          <button type="submit">Editar</button>
        </Actions>
        <Actions>
          <MdDeleteForever size={15} color="#DE3B3B" />
          <button type="submit">Excluir</button>
        </Actions>
      </ListActions>
    </Container>
  );
}
/* <button type="button">
    
  </button>

  
  ); */
