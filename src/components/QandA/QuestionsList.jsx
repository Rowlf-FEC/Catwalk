import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';
import Question from './Question';

function QuestionsList(props) {
  const context = { headers: { authorization: config.token }, params: { product_id: 27189 } };

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get(`${config.url}/qa/questions`, context)
      .then((results) => {
        setQuestions(results.data.results);
        console.log(results.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // This is a list of questions that relate to the selected product

  // Questions are ordered by "Helpfulness" metric

  // By default shows 4 questions

  // If more that 4 questions it has accordian that drops down 4 more questions at a time
    // If more than 4 questions it has drop down icon that says "More Answered Questions"
    // If no more questions it does not show drop down icon
  return (
    <div>
      {questions.map((q) => <Question key={q.question_id} q={q} />) }
    </div>
  );
}

export default QuestionsList;
