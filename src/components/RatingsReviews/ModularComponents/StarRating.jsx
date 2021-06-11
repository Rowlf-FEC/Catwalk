import React from 'react';
import PropTypes from 'prop-types';
import './StarRating.css';
import findAverageRating from './findAverageRating';

/*
Pass in the object returned in the axios request,
this will render the rating down to the nearest
quarter of a star, per the business requirements.
*/

function StarRating({ ratings }) {
  const stars = findAverageRating(ratings);
  /*
  Per business requirements, round visible star ratings to the nearest
  quarter of a star, e.g. rating of 4.71 will be represented by 4.75 stars
  */
  const roundedStars = Math.round(stars * 4) / 4;

  const starsToShow = roundedStars * 20 || 100;
  return (
    <div>
      <div className="starOutline" />
      <div style={{ width: starsToShow }} className="star" />
    </div>
  );
}

StarRating.propTypes = {
  ratings: PropTypes.shape().isRequired,
};

export default StarRating;
