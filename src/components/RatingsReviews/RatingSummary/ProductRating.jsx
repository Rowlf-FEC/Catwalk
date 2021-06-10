import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

function ProductRating({ rating }) {
  return (
    <Header style={{ fontSize: '4.5em' }}>
      {rating}
    </Header>
  );
}

ProductRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default ProductRating;
