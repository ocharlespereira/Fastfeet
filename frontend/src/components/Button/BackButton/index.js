import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import IconButton from '../IconButton';

export default function BackButton({ action }) {
  return (
    <IconButton
      title="VOLTAR"
      Icon={MdKeyboardArrowLeft}
      action={action}
      background="#CCC"
    />
  );
}
