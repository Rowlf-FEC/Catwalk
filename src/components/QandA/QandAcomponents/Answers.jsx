import React from 'react';
import axios from 'axios';

function Answers(props) {

  // getter and setter
  const[productId, setProductId] = useState(null);
  // if you console.logged productId it would equal whatever state is in QandA class

  // this sets state in QandA class
  setProductId(4)
  // if you console.logged productId it would equal 4

}

export default Answers;