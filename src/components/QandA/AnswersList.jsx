import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Answer from './Answer';
import moreAndLess from './moreAndLessButtons';

// this helper function is used in .sort() method to order answers by helpfulness
function compare(a, b) {
  if (a.helpfulness > b.helpfulness) {
    return -1;
  }
  if (a.helpfulness < b.helpfulness) {
    return 1;
  }
  return 0;
}

function AnswersList({ answersObj }) {
  const [answers, setAnswers] = useState([]);
  const [count, setCount] = useState(1);
  const [shownAnswers, setShownAnswers] = useState([]);

  useEffect(() => {
    const answersArr = Object.keys(answersObj).map((key) => answersObj[key]);
    answersArr.sort(compare);
    // this forEach is making sure that if the Seller answers a question it always shows first
    answersArr.forEach((obj, index) => {
      if (obj.answerer_name === 'Seller') {
        const temp = answersArr[0];
        answersArr[0] = obj;
        answersArr[index] = temp;
      }
    });
    setAnswers(answersArr);
  }, [answersObj]);

  useEffect(() => {
    const results = [];
    for (let i = 0; i <= count; i += 1) {
      if (answers[i] !== undefined) {
        results.push(answers[i]);
      }
    }
    setShownAnswers(results);
  }, [count, answers]);

  function showMore() {
    setCount(count + 2);
  }
  function showLess() {
    if (count > 1) {
      setCount(count - 2);
    }
  }

  return (
    <Grid>
      {shownAnswers.map((answer) => <Answer key={answer.id} answer={answer} />)}
      {answers.length > 2 ? moreAndLess(showLess, showMore, count, answers, 'Answers') : null}
    </Grid>
  );
}

AnswersList.propTypes = {
  answersObj: PropTypes.shape(),
};
AnswersList.defaultProps = {
  answersObj: {},
};

export default AnswersList;
