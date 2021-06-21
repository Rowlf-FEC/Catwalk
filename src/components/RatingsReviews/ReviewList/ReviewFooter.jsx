/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Divider } from 'semantic-ui-react';
import axios from 'axios';

function ReviewFooter({ helpfulness, reviewId, sortReviews }) {
  const [helpfulCount, setHelpfulCount] = useState(helpfulness);
  const [ratedHelpful, setRatedHelpful] = useState(false);
  // const [errorLabel, setErrorLabel] = useState(false);

  const updateCount = () => {
    const updateHelpfulnessConfig = {
      method: 'put',
      url: `/${reviewId}/helpful`,
    };

    axios(updateHelpfulnessConfig)
      .then((res) => {
        if (res.status === 204) {
          setHelpfulCount(helpfulCount + 1);
          setRatedHelpful(true);
        }
      })
      .then(() => sortReviews())
      // TODO: error handling that doesn't involve console.log
      // Popup?
      .catch((err) => {
        console.log(err);
      });
  };
  const helpfulnessCount = (
    <button
      id="helpfulnessCount"
      type="submit"
      onClick={(e) => {
        e.preventDefault();
        if (ratedHelpful === false) {
          updateCount();
        }
      }}
    >
      {`Yes, (${helpfulCount})`}
    </button>
  );

  const sendReportReview = () => {
    const sendReportConfig = {
      method: 'put',
      url: `/${reviewId}/report`,
    };

    axios(sendReportConfig)
      .then((res) => {
        if (res.status === 204) {
          sortReviews();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const reportReview = (
    <button
      id="reportReview"
      type="submit"
      onClick={(e) => {
        e.preventDefault();
        sendReportReview();
      }}
    >
      Report
    </button>
  );

  return (
    <Container textAlign="left">
      <p>
        Helpful?&nbsp;
        {helpfulnessCount}
        &nbsp;
        {reportReview}
      </p>
      <Divider fitted />
    </Container>
  );
}

ReviewFooter.propTypes = {
  helpfulness: PropTypes.number.isRequired,
  reviewId: PropTypes.number.isRequired,
  sortReviews: PropTypes.func.isRequired,
};

export default ReviewFooter;
