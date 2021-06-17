import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Divider } from 'semantic-ui-react';
import axios from 'axios';
import config from '../../../config';

function ReviewFooter({ helpfulness, reviewId, sortReviews }) {
  const [helpfulCount, setHelpfulCount] = useState(helpfulness);
  const [ratedHelpful, setRatedHelpful] = useState(false);
  // const [errorLabel, setErrorLabel] = useState(false);

  const updateCount = () => {
    const updateHelpfulness = {
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/reviews/${reviewId}/helpful`,
      headers: {
        Authorization: `${config.token}`,
      },
    };

    axios(updateHelpfulness)
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
      {helpfulCount}
    </button>
  );

  return (
    <Container textAlign="left">
      <p>
        Helpful? Yes (
        {helpfulnessCount}
        ) | Report
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
