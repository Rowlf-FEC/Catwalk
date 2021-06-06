/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
import React from 'react';
<<<<<<< HEAD
import config from'../../config'; // need to confirm that this is the filepath to get to config.js
=======
import axios from 'axios';
import config from '../../config'; // need to confirm that this is the filepath to get to config.js
import ProductImage from './ProductImage';
import ProductDescription from './ProductDescription';
import BuyProduct from './BuyProduct';
>>>>>>> origin/main

export default class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      productDescription: [],
      productEssentials: [],
      productId: props.productId || 27197,
    };
  }

  componentDidMount() {
    const { productId } = this.state;
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/products/${productId}`, {
      headers: {
        Authorization: `${config.token}`,
      },
    })
      .then((result) => {
        const { data } = result;
        const resultDescriptions = [data.description, data.slogan];
        const resultEssentials = [data.category, data.default_price, data.name, data.features];
        this.setState({
          productDescription: resultDescriptions,
          productEssentials: resultEssentials,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    const { images, productEssentials, productDescription } = this.state;
    return (
      <div>
        <ProductImage images={images} />
        <BuyProduct essentials={productEssentials} />
        <ProductDescription productDescription={productDescription} />
      </div>
    );
  }
}

/* return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/products/${this.productId}`, {
  headers: {
    Authorization: `${config.token}`,
  }}
    .then(result => {
      do things to result
    })
*/
