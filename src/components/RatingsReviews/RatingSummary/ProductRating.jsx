import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

function ProductRating({ rating }) {
  return (
    <Header
      style={{ fontSize: '4.5em' }}
    >
      {Number.isNaN(rating) ? rating : '5.0'}
    </Header>
  );
}

ProductRating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default ProductRating;
