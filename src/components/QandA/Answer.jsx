import React, { useState } from 'react';
import axios from 'axios';

function Answer(props) {
  // This is a single answer among many for the answer list

  // Has answer message

  // Has "By [username], Month, DD, YYYY" displayed

  // Has "Helpful?" button that can only be clicked once per user

  // Has "Yes(#)" icon that denotes how many other users found answer helpful.
  // Should increment when user click helpful button
  // console.log(props.answer)

  return (
    <div>
      <p>{props.answer.answerer_name}</p>
      <p>{props.answer.body}</p>
      <p>{props.answer.date}</p>
    </div>
  );
}

export default Answer;
