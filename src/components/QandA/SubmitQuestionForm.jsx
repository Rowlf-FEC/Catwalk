import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Form, Button } from 'semantic-ui-react';
import config from '../../config';

function SubmitQuestionForm({ productId }) {
  const [open, setOpen] = useState(false);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function nicknameStore(e) {
    setNickname(e.target.value);
  }

  function emailStore(e) {
    setEmail(e.target.value);
  }

  function messageStore(e) {
    setMessage(e.target.value);
  }

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
            <Form.Input onChange={nicknameStore} fluid label="What is your nickname? *" placeholder="Example: Jackson11! *Required" />
            <Form.Input onChange={emailStore} fluid label="What is your email? *" placeholder="Example: JaneDoe@Gmail.com *Required" />
          </Form.Group>
          <Form.TextArea onChange={messageStore} label="Question" placeholder="Your Question About The Product Here..." />
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

export default SubmitQuestionForm;
