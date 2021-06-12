/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
import React from 'react';
import axios from 'axios';
import {
  Grid,
} from 'semantic-ui-react';
import './ProductImage/ProductImage.css';

import config from '../../config';
import ProductImage from './ProductImage/ProductImage';
import ProductDescription from './ProductDescription';
import BuyProduct from './BuyProduct/BuyProduct';

export default class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyle: [],
      images: [],
      isTrue: true,
      productDescription: [],
      essentials: [],
      productId: props.productId || 27192,
      quantities: [],
      qtyOptions: [],
      sizeOptions: [],
      skuCart: null,
      qtyCart: 0,
      styles: [],
    };
    this.changeStyle = this.changeStyle.bind(this);
    this.submitItem = this.submitItem.bind(this);
    this.setQuantity = this.setQuantity.bind(this);
    this.setSizeQuantity = this.setSizeQuantity.bind(this);
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
          essentials: resultEssentials,
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
          })
          .then(() => {
            const {
              currentStyle,
            } = this.state;
            const skus = Object.keys(currentStyle[0].skus);
            const sizeResult = [];
            const qtyResult = {};
            for (let i = 0; i < skus.length; i += 1) {
              const sku = skus[i];
              if (sku === 'null') {
                break;
              } else {
                const item = currentStyle[0].skus[sku];
                if (item.quantity > 0) {
                  const sizeOption = {
                    key: item.quantity,
                    text: item.size,
                    value: sku,
                  };
                  sizeResult.push(sizeOption);
                  qtyResult[item.size] = item.quantity;
                }
              }
            }
            this.setState({
              sizeOptions: sizeResult,
              qtyOptions: [qtyResult],
            });
          }),
      );
  }

  setQuantity(sku) {
    const { sizeOptions } = this.state;
    const quantitiesArr = [];
    let quantity;

    sizeOptions.forEach((size) => {
      if (size.value === sku) {
        quantity = size.key;
      }
    });

    let n = 1;
    while (n <= quantity) {
      if (n > 15) {
        break;
      }
      quantitiesArr.push({
        key: n + 1,
        text: n,
        value: sku,
      });
      n += 1;
    }

    this.setState({
      quantities: quantitiesArr,
    });
  }

  setSizeQuantity(skuQty) {
    this.setState({
      isTrue: false,
      qtyCart: skuQty[0],
      skuCart: skuQty[1],
    });
  }

  changeStyle(style) {
    this.setState({
      currentStyle: [style],
      images: style.photos,
    }, () => {
      const {
        currentStyle,
      } = this.state;
      const skus = Object.keys(currentStyle[0].skus);
      const sizeResult = [];
      const qtyResult = {};
      for (let i = 0; i < skus.length; i += 1) {
        const sku = skus[i];
        if (sku === 'null') {
          break;
        } else {
          const item = currentStyle[0].skus[sku];
          if (item.quantity > 0) {
            const sizeOption = {
              key: sku,
              text: item.size,
              value: sku,
            };
            sizeResult.push(sizeOption);
            qtyResult[item.size] = item.quantity;
          }
        }
      }
      this.setState({
        isTrue: true,
        sizeOptions: sizeResult,
        qtyOptions: [qtyResult],
      });
    });
  }

  submitItem() {
    const { skuCart, qtyCart } = this.state;
    let n = 0;
    while (n < qtyCart) {
      axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/cart', { sku_id: skuCart }, {
        headers: {
          Authorization: `${config.token}`,
        },
      });
      n += 1;
    }
  }

  render() {
    const {
      images, essentials, productDescription, currentStyle,
      styles, quantities, sizeOptions, isTrue,
    } = this.state;
    return (
      <div>
        <Grid columns={2}>
          <Grid.Row stretched>
            <Grid.Column className="carouselColumn" width={10}>
              <ProductImage images={images} />
            </Grid.Column>
            <Grid.Column textAlign="left" width={6}>
              <BuyProduct
                essentials={essentials}
                changeStyle={this.changeStyle}
                currentStyle={currentStyle}
                isTrue={isTrue}
                quantities={quantities}
                setQuantity={this.setQuantity}
                setSizeQuantity={this.setSizeQuantity}
                sizeOptions={sizeOptions}
                styles={styles}
                submitItem={this.submitItem}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row stretched>
            <Grid.Column textAlign="center" width={16}>
              <ProductDescription productDescription={productDescription} essentials={essentials} />
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
