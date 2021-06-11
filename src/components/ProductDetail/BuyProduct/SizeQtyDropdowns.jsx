/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Dropdown,
} from 'semantic-ui-react';

function SizeQtyDropdowns({
  qtyOptions,
  setTrue,
  sizeOptions,
}) {
  const quantities = [];

  setTrue(quantities.length === 0);

  return (
    <div>
      <Dropdown
        header="Select a size"
        selection
        onChange={(e) => {
          let n = 1;
          while (n <= qtyOptions[0][e.target.textContent]) {
            if (n > 15) {
              break;
            }
            quantities.push({
              key: n + 1,
              text: n,
              value: n,
            });
            n += 1;
          }
        }}
        options={sizeOptions}
        placeholder={sizeOptions.length === 0 ? 'OUT OF STOCK' : 'Select Size'}
      />
      <Dropdown
        placeholder={quantities.length === 0 ? '-' : '1'}
        compact
        defaultValue="1"
        selection
        options={quantities}
      />
    </div>
  );
}

SizeQtyDropdowns.propTypes = {
  // currentStyle: PropTypes.array.isRequired,
  qtyOptions: PropTypes.array.isRequired,
  setTrue: PropTypes.func.isRequired,
  sizeOptions: PropTypes.array.isRequired,
};

export default SizeQtyDropdowns;
