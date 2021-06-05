import React, { useState } from 'react';
import axios from 'axios';
import Answers from './Answers.jsx';
import SubmitAnswer from './SubmitAnswer.jsx';


function Questions(props) {

  // getter and setter
  const[productId, setProductId] = useState(null);
  // if you console.logged productId it would equal whatever state is in QandA class

  setProductId(4)
  // if you console.logged productId it would equal 4

}

export default Questions;