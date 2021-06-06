import React from 'react';
import Axios from 'axios';
import config from '../../config';
import QuestionsList from './QuestionsList';
import SearchQuestionsList from './SearchQuestionsList';
import SubmitQuestionPopUp from './SubmitQuestionPopUp';

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // bind methods here
  }

  render() {
    return (
      <div>
        {/* <SearchQuestionsList /> */}
        <QuestionsList />
        {/* <SubmitQuestionPopUp /> */}
      </div>
    );
  }
}

export default QandA;
