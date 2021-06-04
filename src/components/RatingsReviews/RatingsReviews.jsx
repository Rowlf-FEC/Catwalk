import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bluebird from 'bluebird';
import dayjs from 'dayjs';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div class="RatingsReviews">
        <ReviewList />
        <SortOptions />
        <RatingBreakdown />
        <ProductBreakdown />
        <WriteNewReview />
        <KeywordSearch />
      </div>
    )
  }
}

RatingsReviews.propTypes = {

};

export default RatingsReviews;
