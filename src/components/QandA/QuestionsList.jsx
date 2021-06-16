import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Question from './Question';
import moreAndLess from './moreAndLessButtons';
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

  return (
    <Grid centered>
      <Grid id="questions_feed">
        {shownQuestions.map((q) => <Question key={q.question_id} q={q} />)}
      </Grid>
      <Grid.Row className="show_Questions_row">
        {moreAndLess(showLess, showMore, count, shownQuestions, 'Questions', 3)}
      </Grid.Row>
    </Grid>
  );
}

QuestionsList.propTypes = {
  questionsArray: PropTypes.arrayOf(PropTypes.shape()),
};
QuestionsList.defaultProps = {
  questionsArray: [],
};

export default QuestionsList;
