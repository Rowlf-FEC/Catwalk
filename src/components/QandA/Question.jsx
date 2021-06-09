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
// import SumbitAnswersForm from './SumbitAnswersForm';

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
    <div>
      <Grid celled centered>
        <Grid.Row textAlign="left" columns={3}>
          <Grid.Column textAlign="right">
            <h3>Q: "{q.question_body}"</h3>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <h5 onClick={handleHelpful}>
              Helpful?&nbsp;&nbsp;<u>Yes</u>({helpful})
            </h5>
          </Grid.Column>
          <Grid.Column>
            <h5><u>Add Answer</u></h5>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <AnswersList answersObj={q.answers} />
        </Grid.Row>
        <Grid.Row>
          <Button>Add an Answer</Button>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Question;
