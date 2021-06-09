/* eslint-disable no-unused-vars */
import React from 'react';
import Axios from 'axios';
import { Grid, Segment } from 'semantic-ui-react';
import config from '../../config';
import QuestionsList from './QuestionsList';
import SearchQuestionsList from './SearchQuestionsList';
import SubmitQuestionForm from './SubmitQuestionForm';

function QandA(props) {
  return (
    <div className="QandA">
      <h1>Questions and Answers</h1>
      <Grid centered>
        <Grid.Row textAlign="center">
          <div>
            <input size="100" type="text" placeholder="Have a Question? Search for Answers..."></input>
          </div>
          {/* <SearchQuestionsList /> */}
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column width={15}>
            <Segment>
              <QuestionsList />
            </Segment>
            {/* <Segment>
              < />
            </Segment>
            <Segment>
              < />
            </Segment> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {/* <SubmitQuestionForm /> */}
    </div>
  );
}

export default QandA;
