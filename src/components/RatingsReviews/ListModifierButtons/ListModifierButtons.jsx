import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Button,
  Modal,
  Header,
} from 'semantic-ui-react';
import SubmitReviewForm from './SubmitReviewForm';

function ListModifierButtons({ characteristics, addReviews }) {
  const [open, setOpen] = useState(false);

  return (
    <Container style={{ paddingTop: '40px' }}>
      <Button basic onClick={addReviews}>MORE REVIEWS</Button>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button basic>ADD A REVIEW +</Button>}
      >
        <Modal.Header>Write Your Review</Modal.Header>
        <Modal.Content>
          <Header>About the productName</Header>
          <SubmitReviewForm characteristics={characteristics} />
        </Modal.Content>
        <Modal.Actions>
          <Button basic negative onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button type="submit" positive basic onClick={() => setOpen(false)}>
            Submit Review
          </Button>
        </Modal.Actions>
      </Modal>

    </Container>
  );
}

ListModifierButtons.propTypes = {
  characteristics: PropTypes.shape().isRequired,
  addReviews: PropTypes.func.isRequired,
};

export default ListModifierButtons;
