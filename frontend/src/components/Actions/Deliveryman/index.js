import React, { useState } from 'react';
import { GoKebabHorizontal } from 'react-icons/go';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';

import { Container, Badge, ListActions, Actions } from './styles';

export default function ActionDeliveryman() {
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
