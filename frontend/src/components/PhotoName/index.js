import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function PhotoName({ name }) {
  const nameSplit = name.split(' ');

  return (
    <Container number={Math.floor(Math.random() * ( 5 + 1))}>
      <span>
        {/* split para trazer a primeira letra do nome e a segunda */}
        {nameSplit?.[0]?.[0]} 
        {nameSplit?.[1]?.[0]}
      </span>
    </Container>
  );
}

PhotoName.propTypes = {
	name: PropTypes.string.isRequired,
};