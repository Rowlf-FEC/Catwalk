import React from 'react';
import config from'../src/config.js'; //need to confirm that this is the filepath to get to config.js

export default class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: props.productId || 27197, //assuming that App.jsx has a state with key productId, otherwise default to an id
      productInfo: []
    }
  }

  componentDidMount() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/products/${this.productId}`, {
    headers: {
      'Authorization': `${config.token}`;
    }}
      .then(result => {
        this.setState({
          productInfo: result.data
        });
      });
  }
  render() {
    return(
      console.log('hello, world!')
    );
  }
}


/* axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/products/${this.productId}`, {
  headers: {
    'Authorization': `${config.token}`;
  }}
*/