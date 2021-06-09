/* eslint-disable consistent-return */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import { Grid, Image } from 'semantic-ui-react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import handleTime from '../configFiles/dayjsConfig';
import config from '../../config';

function images(arr) {
  if (arr.length > 0) {
    return (
      <Grid.Row width={3}>
        <Image.Group size="small">
          {arr.map((pic) => <Image key={pic} src={pic} />)}
        </Image.Group>
      </Grid.Row>
    );
  }
}

function Answer({ answer }) {
  const [helpful, setHelpful] = useState(answer.helpfulness);
  const [report, setReport] = useState(false);
  const context = { headers: { Authorization: config.token } };
  const [helpfulClick, setHelpfulClick] = useState(false);

  function handleHelpful(e) {
    if (helpfulClick === false) {
      axios.put(`${config.url}/qa/answers/${answer.id}/helpful`, {}, context)
        .then(() => {
          setHelpful(helpful + 1);
          setHelpfulClick(true);
        })
        .catch((error) => {
          throw error;
        });
    }
  }

  function reportAnswer() {
    axios.put(`${config.url}/qa/answers/${answer.id}/report`, {}, context)
      .then(() => {
        setReport(true);
      })
      .catch((error) => {
        throw error;
      });
  }

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column textAlign="left">
          <h3>A: "{answer.body}"</h3>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={3}>
        <Grid.Column>
          <h6>{answer.answerer_name}, on {handleTime(dayjs(answer.date))}</h6>
        </Grid.Column>
        <Grid.Column width={3}>
          <h6 onClick={handleHelpful}>Helpful?&nbsp;&nbsp;<u>Yes</u>({helpful})</h6>
        </Grid.Column>
        <Grid.Column textAlign="left">
          <h6 onClick={reportAnswer}>{report ? <u>Reported</u> : <u>Report</u>}</h6>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        {images(answer.photos)}
      </Grid.Row>
    </Grid>
  );
}

Answer.propTypes = {
  answer: PropTypes.object.isRequired,
};

export default Answer;
