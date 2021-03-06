import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Modal, Form, Button, Input, Message, Label,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import RenderImages from './RenderImages';

function SubmitAnswerForm({ id, body }) {
  const [open, setOpen] = useState(false);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [photos, setPhotos] = useState([]);
  const [hasErrors, setHasErrors] = useState(true);
  const [hasEmailError, setHasEmailError] = useState(true);
  const [failedSubmit, setFailedSubmit] = useState(false);

  const data = {
    body: message, name: nickname, email, photos,
  };

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

  // this is axios to post a new answer to a specific question
  function submitAnswer() {
    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions/${id}/answers`, data)
      .then((results) => results)
      .catch((err) => {
        throw err;
      });
  }

  // this is to invoke two functions with one onClick event handler
  function doubleFunction() {
    if (!hasEmailError && !hasErrors) {
      setOpen(false);
      submitAnswer();
    } else {
      setHasEmailError(!validateEmail(email));
      setFailedSubmit(true);
    }
  }

  // this is to clear the uploaded photo URLs from state if they cancel submission
  function deleteDoubleFunction() {
    setOpen(false);
    setPhotos([]);
  }

  async function encodeImageFileAsURL(file) {
    const info = new FormData();
    info.append('image', file);
    return axios.post('https://api.imgur.com/3/image', info)
      .then((response) => response.data.data.link)
      .catch((err) => {
        throw err;
      });
  }

  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button id="buttonAnswers" className="submit" size="mini"><u>Add an Answer</u></Button>}
      >
        <Modal.Header>
          Submit your Answer for:
          &nbsp;
          {body}
        </Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Group widths="equal">
              <Form.Field>
                <Form.Input
                  onChange={(e) => { setNickname(e.target.value); }}
                  fluid
                  label="What is your nickname?"
                  placeholder="Example: Jackson11! (60 maximum characters)"
                  maxLength="60"
                />
                <Label
                  pointing
                >
                  For privacy reasons, do not use your full name or email address
                </Label>
              </Form.Field>
              <Form.Field>
                <Form.Input
                  id="email_input"
                  onChange={(e) => { setEmail(e.target.value); }}
                  fluid
                  label="What is your email?"
                  placeholder="Example: JaneDoe@Gmail.com (60 maximum characters)"
                  type="email"
                  required
                  maxLength="60"
                  error={!!hasEmailError}
                />
                <Label
                  pointing
                >
                  For authentication reasons, you will not be emailed
                </Label>
              </Form.Field>
            </Form.Group>
            <Form.TextArea
              maxLength="1000"
              onChange={(e) => setMessage(e.target.value)}
              label="Question"
              placeholder="Your Question About The Product Here... (1000 maximum characters)"
            />
          </Form>
          {photos.length > 0 ? <RenderImages arr={photos} false /> : null}
        </Modal.Content>
        <Modal.Actions>
          {photos.length <= 4 ? (
            <Button
              id="submitPhotos"
              as="label"
              htmlFor="file"
              basic
              content="Upload photos"
              type="button"
            />
          ) : null}
          <Input
            type="file"
            id="file"
            style={{ visibility: 'hidden' }}
            onChange={async (e) => {
              setPhotos(photos.concat([await encodeImageFileAsURL(e.target.files[0])]));
            }}
          />
          <Button
            color="black"
            onClick={() => deleteDoubleFunction()}
          >
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
        {failedSubmit ? failMessage() : null}
      </Modal>
    </>
  );
}

SubmitAnswerForm.propTypes = {
  id: PropTypes.number,
  body: PropTypes.string,
};
SubmitAnswerForm.defaultProps = {
  id: 1,
  body: 'hello world',
};

export default SubmitAnswerForm;
