/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
import React from 'react';
import axios from 'axios';
import {
  Grid, Segment,
} from 'semantic-ui-react';

import config from '../../config';
import ProductImage from './ProductImage/ProductImage';
import ProductDescription from './ProductDescription';
import BuyProduct from './BuyProduct';

export default class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyle: [],
      images: [],
      productDescription: [],
      productEssentials: [],
      productId: props.productId || 27189,
      styles: [],
    };
    this.changeStyle = this.changeStyle.bind(this);
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
      })
      .then(
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/products/${productId}/styles`, {
          headers: {
            Authorization: `${config.token}`,
          },
        })
          .then((result) => {
            const { data } = result;
            this.setState({
              currentStyle: [data.results[0]],
              images: data.results[0].photos,
              styles: data.results,
            });
          })
          .catch((error) => {
            console.log(error);
          }),
      );
  }

  changeStyle(style) {
    this.setState({
      currentStyle: [style],
    });
  }

  render() {
    const {
      images, productEssentials, productDescription, currentStyle, styles,
    } = this.state;
    return (
      <div>
        <Grid columns={2}>
          <Grid.Row stretched>
            <Grid.Column width={10}>
              <ProductImage images={images} />
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment textAlign="left">
                <BuyProduct
                  essentials={productEssentials}
                  changeStyle={this.changeStyle}
                  currentStyle={currentStyle}
                  styles={styles}
                />
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row stretched>
            <Grid.Column width={16}>
              <Segment textAlign="center">
                <ProductDescription
                  productDescription={productDescription}
                />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
