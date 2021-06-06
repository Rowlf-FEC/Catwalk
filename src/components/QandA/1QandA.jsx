import React from 'react';
import Axios from 'axios';
import config from '../../config';
import QuestionsList from './QuestionsList';
import SearchQuestionsList from './SearchQuestionsList';
import SubmitQuestionPopUp from './SubmitQuestionPopUp';

function QandA(props) {
  return (
    <div>
      {/* <SearchQuestionsList /> */}
      <QuestionsList />
      {/* <SubmitQuestionPopUp /> */}
    </div>
  );
}

export default QandA;
