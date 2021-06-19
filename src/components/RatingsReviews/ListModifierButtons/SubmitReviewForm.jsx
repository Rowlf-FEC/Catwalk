/* eslint-disable react/require-default-props */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
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
  setUserRatingError,
  setUserRecommendsError,
  setReviewCharacteristicsError,
  setReviewSummaryError,
  setReviewBodyError,
  setPhotosError,
  setReviewer_nameError,
  setEmailError,
  userRatingError,
  userRecommendsError,
  reviewCharacteristicsError,
  reviewSummaryError,
  reviewBodyError,
  photosError,
  reviewer_nameError,
  emailError,
}) {
  useEffect(() => {
  }, [reviewBody]);

  return (
    <Form>
      <Form.Group inline>
        <Form.Field required>
          <label>Overall Rating:</label>
          <Rating
            maxRating={userRating.maxRating}
            onRate={(e, { rating, maxRating }) => {
              setUserRating({ rating, maxRating });
              setUserRatingError(false);
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
            onChange={(e, { value }) => {
              setUserRecommends(true);
              setUserRecommendsError(false);
            }}
          />
          <Form.Radio
            label="No"
            value="no"
            checked={userRecommends === false}
            onChange={(e, { value }) => {
              setUserRecommends(false);
              setUserRecommendsError(false);
            }}
          />
        </Form.Field>
      </Form.Group>
      {Object.keys(characteristics).map((item) => {
        const characteristicId = characteristics[item].id;
        return (
          <Form.Group
            key={`${item}RadioForm`}
            widths={3}
          >
            <Form.Field>
              <label className="characteristicLabel">
                {item}
              </label>
              <Form.Group inline width={16} required>
                {Object.values(characteristicsList[item]).map((characteristic, index) => (
                  <Form.Radio
                    key={`${characteristic}RadioButton${index + 1}`}
                    className="characteristicRadio"
                    label={characteristic}
                    value={index + 1}
                    checked={reviewCharacteristics[characteristicId] === index + 1}
                    onChange={(e, { value }) => {
                      e.preventDefault();
                      setReviewCharacteristics((currentCharacteristics) => (
                        { ...currentCharacteristics, [characteristicId]: value }
                      ));
                    }}
                  />
                ))}
              </Form.Group>
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
        maxLength="60"
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
        maxLength="1000"
        onChange={((e) => {
          e.preventDefault();
          setReviewBody(e.target.value);
        })}
      />
      {reviewBody.length < 50
        ? (
          <p>Minimum required characters left: {50 - reviewBody.length}</p>
        ) : <p>Minimum reached</p>
      }
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
  setUserRatingError: PropTypes.func.isRequired,
  setUserRecommendsError: PropTypes.func.isRequired,
  setReviewCharacteristicsError: PropTypes.func.isRequired,
  setReviewSummaryError: PropTypes.func.isRequired,
  setReviewBodyError: PropTypes.func.isRequired,
  setPhotosError: PropTypes.func.isRequired,
  setReviewer_nameError: PropTypes.func.isRequired,
  setEmailError: PropTypes.func.isRequired,
  userRatingError: PropTypes.bool.isRequired,
  userRecommendsError: PropTypes.bool.isRequired,
  reviewCharacteristicsError: PropTypes.bool.isRequired,
  reviewSummaryError: PropTypes.bool.isRequired,
  reviewBodyError: PropTypes.bool.isRequired,
  photosError: PropTypes.bool.isRequired,
  reviewer_nameError: PropTypes.bool.isRequired,
  emailError: PropTypes.bool.isRequired,
};

export default SubmitReviewForm;
