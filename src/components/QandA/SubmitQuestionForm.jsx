import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Modal, Form, Button } from 'semantic-ui-react';
import config from '../../config';

function SubmitQuestionForm({ productId }) {
  const [open, setOpen] = useState(false);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function submitQuestion() {
    const data = {
      body: message, name: nickname, email, productId,
    };

    const context = {
      headers:
      {
        authorization: config.token,
      },
    };

    axios.post(`${config.url}/qa/questions`, data, context)
      .then((results) => results)
      .catch((err) => {
        throw err;
      });
  }

  // this function just invokes two functions to be used in onClick event for submission
  function doubleFunction() {
    setOpen(false);
    submitQuestion();
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button id="ask_question_button">Ask a Question</Button>}
    >
      <Modal.Header>Ask Your Question</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Group widths="equal">
            <Form.Input onChange={(e) => { setNickname(e.target.value); }} fluid label="What is your nickname? *" placeholder="Example: Jackson11! *Required" />
            <Form.Input onChange={(e) => { setEmail(e.target.value); }} fluid label="What is your email? *" placeholder="Example: JaneDoe@Gmail.com *Required" />
          </Form.Group>
          <Form.TextArea onChange={(e) => { setMessage(e.target.value); }} label="Question" placeholder="Your Question About The Product Here..." />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Submit Question"
          labelPosition="right"
          icon="paper plane outline"
          onClick={() => doubleFunction()}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

SubmitQuestionForm.propTypes = {
  productId: PropTypes.number,
};
SubmitQuestionForm.defaultProps = {
  productId: 1,
};

export default SubmitQuestionForm;
