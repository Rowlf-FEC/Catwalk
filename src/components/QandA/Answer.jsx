import React, { useState } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import axios from 'axios';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import handleTime from '../configFiles/dayjsConfig';
import RenderImages from './RenderImages';
import config from '../../config';

function Answer({ answer }) {
  const [helpful, setHelpful] = useState(answer.helpfulness);
  const [report, setReport] = useState(false);
  const [helpfulClick, setHelpfulClick] = useState(false);
  const context = { headers: { Authorization: config.token } };

  // this function is axios PUT to mark whether a specific Answer was helpful
  function handleHelpful() {
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

  // this function is axios PUT to report an Answer on a specific Question
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
    <Grid container className="answer">
      <Grid.Row id="answer_body">
        <h5>
          A: &quot;
          {answer.body}
          &quot;
        </h5>
      </Grid.Row>
      <Grid.Row className="answer_info">
        <p className="answerer_data">
          {answer.answerer_name}
          &nbsp;from&nbsp;
          {handleTime(dayjs(answer.date))}
        </p>
        <Button id="buttonAnswers" className="helpful_answer_button" size="mini" onClick={handleHelpful}>
          Helpful?&nbsp;&nbsp;
          <b>
            <u>Yes</u>
            (
            {helpful}
            )
          </b>
        </Button>
        <Button id="buttonAnswers" className="report_button" size="mini" onClick={reportAnswer}>
          {report ? <b><u>Reported</u></b> : <b><u>Report</u></b>}
        </Button>
      </Grid.Row>
      {answer.photos.length > 0 ? <RenderImages arr={answer.photos} /> : null}
    </Grid>
  );
}

Answer.propTypes = {
  answer: PropTypes.shape(),
};
Answer.defaultProps = {
  answer: {},
};

export default Answer;
