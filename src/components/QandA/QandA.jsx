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
  const [productIdNum] = useState(productId);
  const [questions, setQuestions] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [searchLength, setSearchLength] = useState('');

  const context = {
    headers: {
      authorization: config.token,
    },
    params: {
      product_id: productIdNum, page: 1, count: 1000,
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

  function questionListDecider() {
    if (searchLength.length > 2 && searchList.length > 0) {
      return <QuestionsList questionsArray={searchList} bool />;
    }
    if (searchLength.length > 2 && searchList.length === 0) {
      return <h1 id="questions_feed">No Results Found</h1>;
    }
    return <QuestionsList questionsArray={questions} bool={false} />;
  }

  return (
    <div className="QandA">
      <Grid centered className="QandA">
        <Grid.Row stretched className="question_search_bar">
          <SearchQuestionsList
            questionsArray={questions}
            setSearchList={setSearchList}
            setSearchLength={setSearchLength}
          />
          <SubmitQuestionForm productId={productIdNum} />
        </Grid.Row>
        <Grid.Row stretched className="question_feed">
          {questionListDecider()}
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
