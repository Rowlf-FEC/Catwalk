import React from 'react';
import Axios from 'axios';
import config from '../../config.js';

class QandA extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      productId: ''
    }
    // bind methods here
  }

  componentDidMount() {

  }

  render() {

    return (
      <div>
        < SubmitAnswers state={this.state.productId} />
        <h1>Hello World!</h1>
      </div>
    )

  }

}

export default QandA;
