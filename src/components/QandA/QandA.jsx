/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import QuestionsList from './QuestionsList';
import SearchQuestionsList from './SearchQuestionsList';
import SubmitQuestionForm from './SubmitQuestionForm';
import config from '../../config';
import './Question.css';

function QandA({ productId }) {
  const [productIdNum] = useState(productId || 27189);
  const [questions, setQuestions] = useState([]);

  const context = {
    headers: {
      authorization: config.token,
    },
    params: {
      product_id: productIdNum, page: 1, count: 100,
    },
  };

  function compare(a, b) {
    if (a.question_helpfulness > b.question_helpfulness) {
      return -1;
    }
    if (a.question_helpfulness < b.question_helpfulness) {
      return 1;
    }
    return 0;
  }

  useEffect(() => {
    axios.get(`${config.url}/qa/questions`, context)
      .then((results) => {
        results.data.results.sort(compare);
        setQuestions(results.data.results);
      })
      .catch((error) => {
        throw error;
      });
  }, [productIdNum]);

  return (
    <div className="QandA">
      <Grid centered className="QandA">
        <Grid.Row textAlign="center" className="question_scroll">
          <SearchQuestionsList productId={productIdNum} questionsArray={questions} />
          <SubmitQuestionForm productId={productIdNum} />
        </Grid.Row>
        <Grid.Row stretched>
          <QuestionsList questionsArray={questions} />
        </Grid.Row>
      </Grid>
    </div>
  );
}

QandA.propTypes = {
  productId: PropTypes.number,
};
QandA.defaultProps = {
  productId: 27189,
};

export default QandA;
