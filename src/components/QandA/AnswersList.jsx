import React, { useState, useEffect } from 'react';
import Answer from './Answer';

function AnswersList(props) {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    Object.keys(props.answers).forEach((key) =>
      setAnswers([...answers, props.answers[key]]),
    );
  }, []);

  // This is a List for all of the Answers to a single question

  // It is an accordian that by default only shows 2 answers
    // If more than 2 answers it has a "See more Answers" icon for accordian to drop down 2 more answers
    // If no answers to extend list than drop down icon should not appear

  // If the list contains an answer from the seller it is always at the top and seller is in bold

  // Answers should be sorted by helpfulness

  // If the list becomes to large for the screen, it stays contained and becomes scrollable

  return (
    <div>
      {answers.map((answer) => <Answer key={answer.id} answer={answer} />)}
    </div>
  );
}

export default AnswersList;