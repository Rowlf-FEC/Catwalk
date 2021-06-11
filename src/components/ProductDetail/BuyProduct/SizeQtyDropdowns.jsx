/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Dropdown,
} from 'semantic-ui-react';

function SizeQtyDropdowns({
  currentStyle,
  setIsTrue,
}) {
  const qtyOptions = {};
  const sizes = [];
  const [currentQty, setCurrentQty] = useState([]);
  const skus = Object.keys(currentStyle[0].skus);
  for (let i = 0; i < skus.length; i += 1) {
  // for (const sku in currentStyle[0].skus) {
    const sku = skus[i];
    if (sku === 'null') {
      break;
    } else {
      const item = currentStyle[0].skus[sku];
      if (item.quantity > 0) {
        const sizeOption = {
          key: item.size,
          text: item.size,
          value: item.size,
        };
        sizes.push(sizeOption);
        qtyOptions[item.size] = item.quantity;
      }
    }
  }

  setIsTrue(currentQty.length === 0);

  return (
    <div>
      <Dropdown
        header="Select a size"
        selection
        onChange={(e) => {
          const quantities = [];
          let n = 1;
          while (n <= qtyOptions[e.target.textContent]) {
            if (n > 15) {
              break;
            }
            quantities.push({
              key: n,
              text: n,
              value: n,
            });
            n += 1;
          }
          setCurrentQty(quantities);
        }}
        options={sizes}
        placeholder={sizes.length === 0 ? 'OUT OF STOCK' : 'Select Size'}
      />
      <Dropdown
        placeholder={currentQty.length === 0 ? '-' : '1'}
        compact
        defaultValue="1"
        selection
        options={currentQty}
      />
    </div>
  );
}

SizeQtyDropdowns.propTypes = {
  currentStyle: PropTypes.array.isRequired,
  setIsTrue: PropTypes.func.isRequired,
};

export default SizeQtyDropdowns;
