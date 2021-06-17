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
  sortReviews,
  productId,
  characteristics,
  addReviews,
}) {
  const [open, setOpen] = useState(false);
  const [userRating, setUserRating] = useState({ rating: null, maxRating: 5 });
  const [userRecommends, setUserRecommends] = useState(null);
  const [reviewCharacteristics, setReviewCharacteristics] = useState({});
  const [reviewSummary, setReviewSummary] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [photos, setPhotos] = useState([]);
  const [reviewer_name, setReviewer_name] = useState('');
  const [email, setEmail] = useState('');
  const [handleButton, setHandleButton] = useState();
  const [formHasError, setFormHasError] = useState(false);
  const [formErrors, setFormErrors] = useState(null);

  useEffect(() => {
    if (!allReviewsLoaded) {
      setHandleButton(<Button basic onClick={addReviews}>MORE REVIEWS</Button>);
    } else {
      setHandleButton(null);
    }
  }, [allReviewsLoaded, addReviews]);

  const handleFormErrors = (errorList) => {
    // expect errorList to be an array of errors
    // render all the errors in a label
    if (errorList.length > 0) {
      setFormErrors(
        <Label
          basic
          color="red"
        >
          err
        </Label>,
      );
    }
    return null;
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    // if (handleFormErrors)

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
      .catch((error) => {
        console.log(error);
      });
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
          <Header>About the productName</Header>
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
            setFormHasError={setFormHasError}
            handleFormErrors={handleFormErrors}
          />
        </Modal.Content>
        <Modal.Actions>
          {formErrors}
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
  sortReviews: PropTypes.func.isRequired,
  productId: PropTypes.number.isRequired,
  characteristics: PropTypes.shape().isRequired,
  addReviews: PropTypes.func.isRequired,
};

export default ListModifierButtons;
