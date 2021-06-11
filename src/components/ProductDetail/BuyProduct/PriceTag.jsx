/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

function PriceTag({
  currentStyle,
}) {
  return (
    <Header>
      <Header.Content
        className={currentStyle[0].sale_price ? 'sale' : 'original'}
        content={currentStyle[0].sale_price ? `$${currentStyle[0].sale_price}` : `$${currentStyle[0].original_price}`}
      />
      <Header.Subheader
        content={currentStyle[0].sale_price ? (
          <span className="strikethrough">
            $
            {currentStyle[0].original_price}
          </span>
        ) : null}
      />
    </Header>
  );
}

PriceTag.propTypes = {
  currentStyle: PropTypes.array.isRequired,
};

export default PriceTag;
