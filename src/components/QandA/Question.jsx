/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Header, Accordion, Grid, Button } from 'semantic-ui-react';
import AnswersList from './AnswersList';
import config from '../../config';
import SubmitAnswerForm from './SubmitAnswerForm';
import './Question.css';

function Question({ q }) {
  // This is for each individual question
  // inside this is a list for all the answers that is an accordian
  const [helpful, setHelpful] = useState(q.question_helpfulness);
  const [helpfulClick, setHelpfulClick] = useState(false);

  const context = { headers: { Authorization: config.token } };

  function handleHelpful(e) {
    if (helpfulClick === false) {
      axios.put(`${config.url}/qa/questions/${q.question_id}/helpful`, {}, context)
        .then(() => {
          setHelpful(helpful + 1);
          setHelpfulClick(true);
        })
        .catch((error) => {
          throw error;
        });
    }
  }
  return (
    <Grid centered container id="question">
      <Grid.Row columns={3} className="question_row">
        <Grid.Column textAlign="left" width={10}>
          <h4>Q: "{q.question_body}"</h4>
        </Grid.Column>
        <Grid.Column textAlign="right" width={3}>
          <Button id="button" size="mini" onClick={handleHelpful}>
            Helpful?&nbsp;&nbsp;<u>Yes</u>({helpful})
          </Button>
        </Grid.Column>
        <Grid.Column width={3}>
          <SubmitAnswerForm id={q.question_id} body={q.question_body} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="answer_row">
        <AnswersList answersObj={q.answers} />
      </Grid.Row>
    </Grid>
  );
}

export default Question;
