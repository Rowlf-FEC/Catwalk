import React, { useState } from 'react';
import axios from 'axios';
import {
  Modal, Form, Button, Input,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import config from '../../config';

function SubmitAnswerForm({ id, body }) {
  const [open, setOpen] = useState(false);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const context = { headers: { authorization: config.token } };
  const data = {
    body: message, name: nickname, email, photos: [],
  };

  // this is axios to post a new answer to a specific question
  function submitAnswer() {
    axios.post(`${config.url}/qa/questions/${id}/answers`, data, context)
      .then((results) => results)
      .catch((err) => err);
  }

  // this is just to invoke two functions in event handler
  function doubleFunction() {
    setOpen(false);
    submitAnswer();
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button id="button" size="mini"><u>Add an Answer</u></Button>}
    >
      <Modal.Header>
        Submit your Answer for:
        &nbsp;
        {body}
      </Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Group widths="equal">
            <Form.Field control={Input} onChange={(e) => setNickname(e.target.value)} fluid label="What is your nickname?" placeholder="Example: Jackson11!" />
            <Form.Field control={Input} id="email_input" onChange={(e) => setEmail(e.target.value)} fluid label="What is your email? *" placeholder="Example: JaneDoe@Gmail.com" type="email" required error={{ content: 'Please enter a valid email address', pointing: 'above' }} />
          </Form.Group>
          <Form.TextArea onChange={(e) => setMessage(e.target.value)} label="Question" placeholder="Your Question About The Product Here..." />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Submit Answer"
          labelPosition="right"
          icon="paper plane outline"
          onClick={() => doubleFunction()}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

SubmitAnswerForm.propTypes = {
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
};

export default SubmitAnswerForm;
