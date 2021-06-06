import React, { useState } from 'react';
import axios from 'axios';
import AnswersList from './AnswersList';
//import SumbitAnswersPopUp from './SumbitAnswersPopUp';

function Question(props) {
  /** props.q= {question_id, etc etc}
   *
   *  Need questionId to pass to AnswersList
   *
   */

  // This is for each individual question

  // inside this is a list for all the answers that is an accordian

  return (
    <div>
      <AnswersList answers={props.q.answers} />
    </div>
  );
}

export default Question;
