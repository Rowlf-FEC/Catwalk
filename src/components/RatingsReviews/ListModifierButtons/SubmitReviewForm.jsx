/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Rating, Button } from 'semantic-ui-react';
import characteristicsList from './characteristicsList';

function SubmitReviewForm({ characteristics }) {
  const [userRating, setUserRating] = useState({ rating: null, maxRating: 5 });
  const [userRecommends, setUserRecommends] = useState(null);
  const [reviewCharacteristics, setReviewCharacteristics] = useState({});
  const [reviewBody, setReviewBody] = useState('');
  const [photos, setPhotos] = useState([]);
  const [reviewer_name, setReviewer_name] = useState('');
  const [email, setEmail] = useState('');
  const [reviewDate, setReviewDate] = useState('');

  useEffect(() => {

  });

  return (
    <Form>
      <Form.Group inline>
        <label>Overall Rating:</label>
        <Rating
          maxRating={userRating.maxRating}
          onRate={(e, { rating, maxRating }) => {
            setUserRating({ rating, maxRating });
          }}
          clearable
        />
      </Form.Group>
      <Form.Group inline>
        <label>Do you recommend this product? mando</label>
        <Form.Radio
          label="Yes"
          value={1}
          checked={userRecommends === 1}
          onChange={(e, { value }) => setUserRecommends(value)}
        />
        <Form.Radio
          label="No"
          value={0}
          checked={userRecommends === 0}
          onChange={(e, { value }) => setUserRecommends(value)}
        />
      </Form.Group>
      {Object.keys(characteristics).map((item) => (
        <Form.Group
          error="error"
          key={`${item}RadioForm`}
          inline
          widths={3}
        >
          <label>
            {item}
            : mando
          </label>
          <Form.Radio
            label={characteristicsList[item][1]}
            value={1}
            checked={reviewCharacteristics[item] === 1}
            onChange={(e, { value }) => {
              setReviewCharacteristics((currentState) => (
                { ...currentState, [item]: value }
              ));
            }}
          />
          <Form.Radio
            label={characteristicsList[item][2]}
            value={2}
            checked={reviewCharacteristics[item] === 2}
            onChange={(e, { value }) => {
              setReviewCharacteristics((currentState) => (
                { ...currentState, [item]: value }
              ));
            }}
          />
          <Form.Radio
            label={characteristicsList[item][3]}
            value={3}
            checked={reviewCharacteristics[item] === 3}
            onChange={(e, { value }) => {
              setReviewCharacteristics((currentState) => (
                { ...currentState, [item]: value }
              ));
            }}
          />
          <Form.Radio
            label={characteristicsList[item][4]}
            value={4}
            checked={reviewCharacteristics[item] === 4}
            onChange={(e, { value }) => {
              setReviewCharacteristics((currentState) => (
                { ...currentState, [item]: value }
              ));
            }}
          />
          <Form.Radio
            label={characteristicsList[item][5]}
            value={5}
            checked={reviewCharacteristics[item] === 5}
            onChange={(e, { value }) => {
              setReviewCharacteristics((currentState) => (
                { ...currentState, [item]: value }
              ));
            }}
          />
        </Form.Group>
      ))}
      <Form.Input
        label="Review summary: NOT mando"
        fluid
        placeholder="Title of my review..."
      />
      <Form.Input
        error="Please write a review"
        label="Review body:"
        fluid
        placeholder="Body of my review..."
      />
      <Form.Group inline>
        <Button
          basic
          content="Upload photos"
          onClick={(e) => {
            console.log('click');
          }}
        />
      </Form.Group>
      <Form.Input
        error="Please enter a nickname"
        label="What is your nickname?"
        placeholder="Example: jackson11!"
      />
      <Form.Input
        error="Please enter an email"
        label="What is your email?"
        placeholder="Example: jackson11@email.com"
      />
      <p>For authentication reasons, you will not be emailed</p>
    </Form>
  );
}

SubmitReviewForm.propTypes = {
  characteristics: PropTypes.shape().isRequired,
};

export default SubmitReviewForm;
