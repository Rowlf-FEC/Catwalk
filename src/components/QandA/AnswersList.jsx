/* eslint-disable react/self-closing-comp */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Accordion, Icon, Grid, Image, Button } from 'semantic-ui-react';
import Answer from './Answer';

// If the list becomes to large for the screen, it stays contained and becomes scrollable

function AnswersList(props) {
  const [answers, setAnswers] = useState([]);
  const [count, setCount] = useState(1);
  const [shownAnswers, setShownAnswers] = useState([]);
  useEffect(() => {
    const answersArr = Object.keys(props.answersObj).map((key) => props.answersObj[key]);
    function compare(a, b) {
      if (a.helpfulness > b.helpfulness) {
        return -1;
      }
      if (a.helpfulness < b.helpfulness) {
        return 1;
      }
      return 0;
    }
    answersArr.sort(compare);
    answersArr.forEach((obj, index) => {
      if (obj.answerer_name === 'Seller') {
        const temp = answersArr[0];
        answersArr[0] = obj;
        answersArr[index] = temp;
      }
    });
    setAnswers(answersArr);
  }, [props.answersObj]);

  useEffect(() => {
    const results = [];
    for (let i = 0; i <= count; i++) {
      if (answers[i] !== undefined) {
        results.push(answers[i]);
      }
    }
    setShownAnswers(results);
  }, [count, answers]);

  function showMore(e) {
    setCount(count + 2);
  }
  function showLess(e) {
    if (count > 1) {
      setCount(count - 2);
    }
  }
  function enoughQuestions() {
    if (answers.length > count + 1 && count > 1) {
      return (
        <div>
          <Button onClick={showLess}>
            <Icon name="angle up" />
            <u>Show Less Answers</u>
          </Button>
          <Button onClick={showMore}>
            <Icon name="angle down" />
            <u>Show More Answers</u>
          </Button>
        </div>
      );
    }
    if (answers.length > count + 1) {
      return (
        <Button onClick={showMore}>
          <Icon name="angle down" />
          <u>Show More Answers</u>
        </Button>
      );
    }
    if (count > 1) {
      return (
        <Button onClick={showLess}>
          <Icon name="angle up" />
          <u>Show Less Answers</u>
        </Button>
      );
    }
    if (answers.length === 0) {
      return <p></p>;
    }
  }

  return (
    <div>
      {shownAnswers.map((answer) => <Answer key={answer.id} answer={answer} />)}
      {enoughQuestions()}
    </div>
  );
}

export default AnswersList;
