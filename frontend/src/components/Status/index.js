import React from 'react';
import { MdFiberManualRecord } from 'react-icons/md';

import PropTypes from 'prop-types';

import { Container, Content } from './styles';

export default function Status({ text, color, background }) {
  return (
    <Container>
      <Content color={color} background={background}>
        <MdFiberManualRecord size={15} color={color} />
        <strong>{text}</strong>
      </Content>
    </Container>
  );
}

Status.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};
