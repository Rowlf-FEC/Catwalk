/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable react/self-closing-comp */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Button, Icon } from 'semantic-ui-react';
import config from '../../config';
import Question from './Question';

function QuestionsList(props) {
  const context = { headers: { authorization: config.token }, params: { product_id: 27189 } };

  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(3);
  const [shownQuestions, setShownQuestions] = useState([]);

  useEffect(() => {
    axios.get(`${config.url}/qa/questions`, context)
      .then((results) => {
        function compare(a, b) {
          if (a.question_helpfulness > b.question_helpfulness) {
            return -1;
          }
          if (a.question_helpfulness < b.question_helpfulness) {
            return 1;
          }
          return 0;
        }
        results.data.results.sort(compare);
        setQuestions(results.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const results = [];
    for (let i = 0; i <= count; i++) {
      if (questions[i] !== undefined) {
        results.push(questions[i]);
      }
    }
    setShownQuestions(results);
  }, [count, questions]);

  function showMore(e) {
    setCount(count + 4);
  }
  function showLess(e) {
    if (count > 1) {
      setCount(count - 4);
    }
  }
  function questionsAccordionButtons() {
    if (questions.length > count + 1 && count > 1) {
      return (
        <div>
          <Button onClick={showLess}>
            <Icon name="angle up" />
            <u>Show Less Questions</u>
          </Button>
          <Button onClick={showMore}>
            <Icon name="angle down" />
            <u>Show More Questions</u>
          </Button>
        </div>
      );
    }
    if (questions.length > count + 1) {
      return (
        <Button onClick={showMore}>
          <Icon name="angle down" />
          <u>More Answered Questions</u>
        </Button>
      );
    }
    if (count > 3) {
      return (
        <Button onClick={showLess}>
          <Icon name="angle up" />
          <u>Less Questions</u>
        </Button>
      );
    }
    if (questions.length === 0) {
      return <p></p>;
    }
  }

  return (
    <Grid centered>
      <Grid.Row columns={1}>
        <Grid.Column>
          {shownQuestions.map((q) => <Question key={q.question_id} q={q} />) }
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          {questionsAccordionButtons()}
        </Grid.Column>
        <Grid.Column>
          <Button>Ask A Question</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default QuestionsList;
