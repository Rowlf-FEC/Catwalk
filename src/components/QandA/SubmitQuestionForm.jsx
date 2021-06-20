import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
  Modal, Form, Button, Input, Message,
} from 'semantic-ui-react';

function SubmitQuestionForm({ productId }) {
  const [open, setOpen] = useState(false);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [hasErrors, setHasErrors] = useState(true);
  const [hasEmailError, setHasEmailError] = useState(true);
  const [failedSubmit, setFailedSubmit] = useState(false);

  function validateEmail(str) {
    const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return re.test(str);
  }

  useEffect(() => {
    if (validateEmail(email)) {
      setHasEmailError(false);
    }
    if (!validateEmail(email)) {
      setHasEmailError(true);
    }
    if (message.length === 0) {
      setHasErrors(true);
      return;
    }
    if (nickname.length === 0) {
      setHasErrors(true);
      return;
    }
    setHasErrors(false);
  }, [nickname, email, message]);

  function failMessage() {
    return (
      <Message
        attatched="bottom"
        warning
        color="red"
        onDismiss={() => setFailedSubmit(false)}
      >
        <Message.Header>
          <h3>
            Please fill in all fields *
          </h3>
        </Message.Header>
      </Message>
    );
  }

  function submitQuestion() {
    const data = {
      body: message, name: nickname, email, product_id: productId,
    };

    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions', data)
      .then((results) => results)
      .catch((err) => {
        throw err;
      });
  }

  // this function just invokes two functions to be used in onClick event for submission
  function doubleFunction() {
    if (!hasEmailError && !hasErrors) {
      setOpen(false);
      submitQuestion();
    } else {
      setHasEmailError(!validateEmail(email));
      setFailedSubmit(true);
    }
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
            <Form.Field
              control={Input}
              onChange={(e) => { setNickname(e.target.value); }}
              fluid
              label="What is your nickname?"
              placeholder="Example: Jackson11! (60 maximum characters)"
              maxLength="60"
            />
            <Form.Field
              control={Input}
              id="email_input"
              onChange={(e) => { setEmail(e.target.value); }}
              fluid
              label="What is your email? *"
              placeholder="Example: JaneDoe@Gmail.com (60 maximum characters)"
              type="email"
              required
              maxLength="60"
              error={hasEmailError ? { content: 'Please enter a valid email address', pointing: 'above' } : false}
            />
          </Form.Group>
          <Form.TextArea
            maxLength="1000"
            onChange={(e) => { setMessage(e.target.value); }}
            label="Question"
            placeholder="Your Question About The Product Here... (1000 maximum characters)"
          />
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
      {failedSubmit ? failMessage() : null}
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
