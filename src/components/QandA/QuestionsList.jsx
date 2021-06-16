import React, { useState, useEffect } from 'react';
import { Grid, Button, Icon } from 'semantic-ui-react';
import Question from './Question';
import './Question.css';

function QuestionsList({ questionsArray }) {
  const [count, setCount] = useState(3);
  const [shownQuestions, setShownQuestions] = useState(questionsArray.slice(0, 5));

  useEffect(() => {
    setShownQuestions(questionsArray.slice(0, count + 1));
  }, [questionsArray, count]);

  function showMore() {
    setCount(count + 4);
  }

  function showLess() {
    if (count > 1) {
      setCount(count - 4);
    }
  }

  function questionsAccordion() {
    if (shownQuestions.length > count && count > 3) {
      return (
        <div>
          <Button id="show_questions_button_row" onClick={showLess}>
            <Icon name="angle up" />
            <u>Show Less Questions</u>
          </Button>
          <Button id="show_questions_button_row" onClick={showMore}>
            <Icon name="angle down" />
            <u>Show More Questions</u>
          </Button>
        </div>
      );
    }
    if (shownQuestions.length > count) {
      return (
        <Button id="show_questions_button_row" onClick={showMore}>
          <Icon name="angle down" />
          <u>More Answered Questions</u>
        </Button>
      );
    }
    if (count > 3) {
      return (
        <Button id="show_questions_button_row" onClick={showLess}>
          <Icon name="angle up" />
          <u>Less Questions</u>
        </Button>
      );
    }
    return <p />;
  }

  return (
    <Grid centered>
      <Grid id="questions_feed">
        {shownQuestions.map((q) => <Question key={q.question_id} q={q} />)}
      </Grid>
      <Grid.Row>
        {questionsAccordion()}
      </Grid.Row>
    </Grid>
  );
}

export default QuestionsList;
