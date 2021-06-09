import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'semantic-ui-react';

function ProductBreakdown(props) {
  return (
    <div>
      <p>Size</p>
      <Progress percent={50} size="tiny" />
      <p>Fit</p>
      <Progress percent={50} size="tiny" />
    </div>
  );
}

ProductBreakdown.propTypes = {

};

export default ProductBreakdown;
