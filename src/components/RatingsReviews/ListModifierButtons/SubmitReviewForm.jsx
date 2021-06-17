/* eslint-disable react/require-default-props */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Rating,
  Button,
  Input,
  Label,
} from 'semantic-ui-react';
import characteristicsList from './characteristicsList';
import './RadioButtons.css';

function SubmitReviewForm({
  characteristics,
  userRating,
  setUserRating,
  userRecommends,
  setUserRecommends,
  reviewCharacteristics,
  setReviewCharacteristics,
  reviewSummary,
  setReviewSummary,
  reviewBody,
  setReviewBody,
  photos,
  setPhotos,
  reviewer_name,
  setReviewer_name,
  email,
  setEmail,
  setFormHasError,
  handleFormErrors,
}) {
  const [userRatingError, setUserRatingError] = useState(true);
  const [userRecommendsError, setUserRecommendsError] = useState(true);
  const [reviewCharacteristicsError, setReviewCharacteristicsError] = useState(true);
  const [reviewSummaryError, setReviewSummaryError] = useState(true);
  const [reviewBodyError, setReviewBodyError] = useState(true);
  const [photosError, setPhotosError] = useState(true);
  const [reviewer_nameError, setReviewer_nameError] = useState(true);
  const [emailError, setEmailError] = useState(true);

  const handleFormChange = (e) => {
    e.preventDefault();

    const errors = [];

    if (
      userRatingError === false
      && userRecommendsError === false
      && reviewCharacteristicsError === false
      && reviewSummaryError === false
      && reviewBodyError === false
      && photosError === false
      && reviewer_nameError === false
      && emailError === false
    ) {
      setFormHasError(false);
    } else {
      handleFormErrors([1]);
    }
  };

  return (
    <Form>
      <Form.Group inline>
        <Form.Field required>
          <label>Overall Rating:</label>
          <Rating
            maxRating={userRating.maxRating}
            onRate={(e, { rating, maxRating }) => {
              setUserRating({ rating, maxRating });
              handleFormChange(e);
            }}
            clearable
            color="red"
          />
        </Form.Field>
      </Form.Group>
      <Form.Group inline>
        <Form.Field error={userRecommendsError} width={8} inline required>
          <label>Do you recommend this product?</label>
          <Form.Radio
            label="Yes"
            value="yes"
            checked={userRecommends === true}
            onChange={(e, { value }) => setUserRecommends(true)}
          />
          <Form.Radio
            label="No"
            value="no"
            checked={userRecommends === false}
            onChange={(e, { value }) => setUserRecommends(false)}
          />
        </Form.Field>
      </Form.Group>
      {Object.keys(characteristics).map((item) => {
        const characteristicId = characteristics[item].id;
        return (
          <Form.Group
            key={`${item}RadioForm`}
            inline
            widths={3}
          >
            <Form.Field error={reviewCharacteristicsError} width={16} required>
              <label className="characteristicLabel">
                {item}
              </label>
              <Form.Radio
                className="characteristicRadio"
                label={characteristicsList[item][1]}
                value={1}
                checked={reviewCharacteristics[characteristicId] === 1}
                onChange={(e, { value }) => {
                  setReviewCharacteristics((currentCharacteristics) => (
                    { ...currentCharacteristics, [characteristicId]: value }
                  ));
                }}
              />
              <Form.Radio
                className="characteristicRadio"
                label={characteristicsList[item][2]}
                value={2}
                checked={reviewCharacteristics[characteristicId] === 2}
                onChange={(e, { value }) => {
                  setReviewCharacteristics((currentCharacteristics) => (
                    { ...currentCharacteristics, [characteristicId]: value }
                  ));
                }}
              />
              <Form.Radio
                className="characteristicRadio"
                label={characteristicsList[item][3]}
                value={3}
                checked={reviewCharacteristics[characteristicId] === 3}
                onChange={(e, { value }) => {
                  setReviewCharacteristics((currentCharacteristics) => (
                    { ...currentCharacteristics, [characteristicId]: value }
                  ));
                }}
              />
              <Form.Radio
                className="characteristicRadio"
                label={characteristicsList[item][4]}
                value={4}
                checked={reviewCharacteristics[characteristicId] === 4}
                onChange={(e, { value }) => {
                  setReviewCharacteristics((currentCharacteristics) => (
                    { ...currentCharacteristics, [characteristicId]: value }
                  ));
                }}
              />
              <Form.Radio
                className="characteristicRadio"
                label={characteristicsList[item][5]}
                value={5}
                checked={reviewCharacteristics[characteristicId] === 5}
                onChange={(e, { value }) => {
                  setReviewCharacteristics((currentCharacteristics) => (
                    { ...currentCharacteristics, [characteristicId]: value }
                  ));
                }}
              />
            </Form.Field>
          </Form.Group>
        );
      })}
      <Form.Input
        error={reviewSummaryError}
        label="Review summary:"
        fluid
        value={reviewSummary}
        placeholder="Example: Best purchase ever!"
        onChange={((e) => {
          e.preventDefault();
          setReviewSummary(e.target.value);
        })}
      />
      <Form.Input
        error={reviewBodyError}
        required
        label="Review body:"
        fluid
        value={reviewBody}
        placeholder="Why did you like the product or not?"
        onChange={((e) => {
          e.preventDefault();
          setReviewBody(e.target.value);
        })}
      />
      <p>Minimum required characters left: [##]</p>
      <p>Minimum reached</p>
      <Form.Group inline>
        <Button
          color={photosError ? 'red' : null}
          as="label"
          htmlFor="file"
          basic
          content="Upload photos"
          type="button"
        />
        <Input
          type="file"
          id="file"
          style={{ visibility: 'hidden' }}
          onChange={(e, { photoURL }) => {
            setPhotos((currentPhotos) => (
              [...currentPhotos, photoURL]
            ));
            console.log(photos);
          }}
        />
      </Form.Group>
      <Form.Input
        error={reviewer_nameError}
        required
        label="What is your nickname?"
        value={reviewer_name}
        placeholder="Example: jackson11!"
        onChange={((e) => {
          e.preventDefault();
          setReviewer_name(e.target.value);
        })}
      />
      <p>For privacy reasons, do not use your full name or email address</p>
      <Form.Input
        error={emailError}
        required
        label="What is your email?"
        value={email}
        placeholder="Example: jackson11@email.com"
        onChange={((e) => {
          e.preventDefault();
          setEmail(e.target.value);
        })}
      />
      <p>For authentication reasons, you will not be emailed</p>
    </Form>
  );
}

SubmitReviewForm.propTypes = {
  characteristics: PropTypes.shape().isRequired,
  userRating: PropTypes.shape().isRequired,
  setUserRating: PropTypes.func.isRequired,
  userRecommends: PropTypes.bool,
  setUserRecommends: PropTypes.func.isRequired,
  reviewCharacteristics: PropTypes.shape().isRequired,
  setReviewCharacteristics: PropTypes.func.isRequired,
  reviewSummary: PropTypes.string.isRequired,
  setReviewSummary: PropTypes.func.isRequired,
  reviewBody: PropTypes.string.isRequired,
  setReviewBody: PropTypes.func.isRequired,
  photos: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  setPhotos: PropTypes.func.isRequired,
  reviewer_name: PropTypes.string.isRequired,
  setReviewer_name: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  setFormHasError: PropTypes.func.isRequired,
  handleFormErrors: PropTypes.func.isRequired,
};

export default SubmitReviewForm;
