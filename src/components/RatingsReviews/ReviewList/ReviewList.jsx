import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import dayjs from 'dayjs';
// import InfiniteScroll from 'react-infinite-scroll-component';
import './ReviewList.css';
import ReviewHeader from './ReviewHeader';
import ReviewBody from './ReviewBody';
import ReviewFooter from './ReviewFooter';

const ReviewList = ({ reviews, sortReviews }) => (
  <Grid id="scrollContainer" className="reviewListContainer">
    {reviews.map((review) => (
      <Grid.Column
        key={`review${review.review_id}`}
        className="reviewContainer"
        width={16}
      >
        <ReviewHeader
          rating={review.rating}
          reviewer_name={review.reviewer_name}
          givenTime={dayjs(review.date)}
        />
        <ReviewBody
          summary={review.summary}
          body={review.body}
        />
        <ReviewFooter
          helpfulness={review.helpfulness}
          reviewId={review.review_id}
          sortReviews={sortReviews}
        />
      </Grid.Column>
    ))}
  </Grid>
);

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      helpfulness: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      recommend: PropTypes.bool.isRequired,
      response: PropTypes.string,
      review_id: PropTypes.number.isRequired,
      reviewer_name: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
    }),
  ).isRequired,
  sortReviews: PropTypes.func.isRequired,
};

export default ReviewList;
