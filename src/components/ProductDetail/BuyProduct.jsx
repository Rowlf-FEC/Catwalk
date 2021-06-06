/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function BuyProduct({ essentials }) {
  return (
    <div>Information to buy product, including styles, price, name</div>
  );
}

BuyProduct.propTypes = {
  essentials: PropTypes.array.isRequired,
};

export default BuyProduct;
