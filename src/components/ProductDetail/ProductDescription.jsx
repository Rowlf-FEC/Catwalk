/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function ProductDescription({ productDescription }) {
  return (
    <div>Slogan and description of product go here</div>
  );
}

ProductDescription.propTypes = {
  productDescription: PropTypes.array.isRequired,
};

export default ProductDescription;
