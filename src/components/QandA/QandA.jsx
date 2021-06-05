import React from 'react';
import Axios from 'axios';
import config from '../../config.js';

class QandA extends React.Component {
  constructor(props) {
<<<<<<< HEAD
    super(props)
    this.state = {
      productId: ''
    }
=======
    super(props);
    this.state = {};
>>>>>>> main
    // bind methods here
  }

  render() {
    return (
      <div>
        < SubmitAnswers state={this.state.productId} />
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default QandA;
