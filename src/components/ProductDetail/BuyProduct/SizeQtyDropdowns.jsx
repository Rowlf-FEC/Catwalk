/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Dropdown,
} from 'semantic-ui-react';

function SizeQtyDropdowns({
  quantities,
  setQuantity,
  setSizeQuantity,
  sizeOptions,
}) {
  return (
    <div>
      <Dropdown
        header="Select a size"
        selection
        onChange={(e, state) => {
          setQuantity(state.value);
        }}
        options={sizeOptions}
        placeholder={sizeOptions.length === 0 ? 'OUT OF STOCK' : 'Select Size'}
      />
      <Dropdown
        placeholder={quantities.length === 0 ? '-' : '1'}
        compact
        defaultValue="1"
        onChange={(e, state) => {
          setSizeQuantity([e.target.textContent, state.value]);
        }}
        selection
        options={quantities}
      />
    </div>
  );
}

SizeQtyDropdowns.propTypes = {
  quantities: PropTypes.array.isRequired,
  setQuantity: PropTypes.func.isRequired,
  setSizeQuantity: PropTypes.func.isRequired,
  sizeOptions: PropTypes.array.isRequired,
};

export default SizeQtyDropdowns;
