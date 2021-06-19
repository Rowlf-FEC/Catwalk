/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Button,
  Modal,
  Header,
  Label,
} from 'semantic-ui-react';
import axios from 'axios';
import SubmitReviewForm from './SubmitReviewForm';
import config from '../../../config';

function ListModifierButtons({
  allReviewsLoaded,
  productName,
  sortReviews,
  productId,
  characteristics,
  addReviews,
}) {
  const charsForState = {};
  Object.values(characteristics).forEach((item) => {
    charsForState[item.id] = 0;
  });
  const [open, setOpen] = useState(false);
  const [userRating, setUserRating] = useState({ rating: null, maxRating: 5 });
  const [userRecommends, setUserRecommends] = useState(null);
  const [reviewCharacteristics, setReviewCharacteristics] = useState(charsForState);
  const [reviewSummary, setReviewSummary] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [photos, setPhotos] = useState([]);
  const [reviewer_name, setReviewer_name] = useState('');
  const [email, setEmail] = useState('');
  const [handleButton, setHandleButton] = useState();
  const [formErrors, setFormErrors] = useState([]);
  const [userRatingError, setUserRatingError] = useState(false);
  const [userRecommendsError, setUserRecommendsError] = useState(false);
  const [reviewCharacteristicsError, setReviewCharacteristicsError] = useState(false);
  const [reviewSummaryError, setReviewSummaryError] = useState(false);
  const [reviewBodyError, setReviewBodyError] = useState(false);
  const [photosError, setPhotosError] = useState(false);
  const [reviewer_nameError, setReviewer_nameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    if (!allReviewsLoaded) {
      setHandleButton(<Button basic onClick={addReviews}>MORE REVIEWS</Button>);
    } else {
      setHandleButton(null);
    }
  }, [allReviewsLoaded, addReviews]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setFormErrors([]);
    let hasErrors = false;

    if (userRating.rating === null) {
      setFormErrors((errors) => (
        [...errors,
          'Please choose a rating',
        ]
      ));
      hasErrors = true;
    }

    if (userRecommends === null) {
      setFormErrors((errors) => (
        [...errors,
          'Please check recommends or not',
        ]
      ));
      hasErrors = true;
    }

    if (Object.values(reviewCharacteristics).includes(0)) {
      setFormErrors((errors) => (
        [...errors,
          'Please rate all characteristics',
        ]
      ));
      hasErrors = true;
    }

    if (reviewSummary.length > 60) {
      setFormErrors((errors) => (
        [...errors,
          'Summary must not contain more than 60 characters',
        ]
      ));
      hasErrors = true;
    }

    if (reviewBody.length <= 50) {
      setFormErrors((errors) => (
        [...errors,
          'Summary must contain more than 50 characters',
        ]
      ));
      hasErrors = true;
    }

    if (reviewer_name.length === 0) {
      setFormErrors((errors) => (
        [...errors,
          'Please enter a name',
        ]
      ));
      hasErrors = true;
    }

    const expression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!expression.test(String(email).toLowerCase())) {
      setFormErrors((errors) => (
        [...errors,
          'Please enter a valid email address',
        ]
      ));
      hasErrors = true;
    }

    if (!hasErrors) {
      const postNewReview = {
        method: 'post',
        url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/reviews/',
        headers: {
          Authorization: `${config.token}`,
        },
        data: {
          product_id: productId,
          rating: userRating.rating,
          summary: reviewSummary,
          body: reviewBody,
          recommend: userRecommends,
          name: reviewer_name,
          email,
          photos,
          characteristics: reviewCharacteristics,
        },
      };

      axios(postNewReview)
        .then(() => {
          sortReviews();
          setOpen(false);
        })
        .catch(() => {
          setFormErrors(
            <Label
              basic
              color="red"
            >
              Error submitting review
            </Label>,
          );
        });
    }
  };

  return (
    <Container style={{ paddingTop: '40px' }}>
      {handleButton}
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button basic>ADD A REVIEW +</Button>}
      >
        <Modal.Header>Write Your Review</Modal.Header>
        <Modal.Content>
          <Header>
            About the&nbsp;
            {productName}
          </Header>
          <SubmitReviewForm
            characteristics={characteristics}
            userRating={userRating}
            setUserRating={setUserRating}
            userRecommends={userRecommends}
            setUserRecommends={setUserRecommends}
            reviewCharacteristics={reviewCharacteristics}
            setReviewCharacteristics={setReviewCharacteristics}
            reviewSummary={reviewSummary}
            setReviewSummary={setReviewSummary}
            reviewBody={reviewBody}
            setReviewBody={setReviewBody}
            photos={photos}
            setPhotos={setPhotos}
            reviewer_name={reviewer_name}
            setReviewer_name={setReviewer_name}
            email={email}
            setEmail={setEmail}
            setUserRatingError={setUserRatingError}
            setUserRecommendsError={setUserRecommendsError}
            setReviewCharacteristicsError={setReviewCharacteristicsError}
            setReviewSummaryError={setReviewSummaryError}
            setReviewBodyError={setReviewBodyError}
            setPhotosError={setPhotosError}
            setReviewer_nameError={setReviewer_nameError}
            setEmailError={setEmailError}
            userRatingError={userRatingError}
            userRecommendsError={userRecommendsError}
            reviewCharacteristicsError={reviewCharacteristicsError}
            reviewSummaryError={reviewSummaryError}
            reviewBodyError={reviewBodyError}
            photosError={photosError}
            reviewer_nameError={reviewer_nameError}
            emailError={emailError}
          />
        </Modal.Content>
        <Modal.Actions>
          {(formErrors.length > 0)
            ? (
              <Label
                basic
                color="red"
              >
                {formErrors.map((error) => (
                  <p key={`error${error}`}>{error}</p>
                ))}
              </Label>
            ) : null}
          <Button
            basic
            negative
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            positive
            basic
            onClick={handleReviewSubmit}
          >
            Submit Review
          </Button>
        </Modal.Actions>
      </Modal>

    </Container>
  );
}

ListModifierButtons.propTypes = {
  allReviewsLoaded: PropTypes.bool.isRequired,
  productName: PropTypes.string.isRequired,
  sortReviews: PropTypes.func.isRequired,
  productId: PropTypes.number.isRequired,
  characteristics: PropTypes.shape().isRequired,
  addReviews: PropTypes.func.isRequired,
};

export default ListModifierButtons;
