import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'semantic-ui-react';

function StarRating(props) {
  return (
    <div>
      <Rating defaultRating={3} maxRating={5} disabled />
    </div>
  );
}

StarRating.propTypes = {

};

export default StarRating;
