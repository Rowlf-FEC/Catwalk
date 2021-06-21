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
import ReactDOM from 'react-dom';
import handleAnalytics from '../RatingsReviews/ModularComponents/handleAnalytics';
import ProductImage from './ProductImage/ProductImage';
import ProductDescription from './ProductDescription';
import BuyProduct from './BuyProduct/BuyProduct';

export default class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyle: [],
      essentials: [],
      images: [],
      isTrue: true,
      productDescription: [],
      productId: props.productId || 27189,
      qtyCart: 0,
      qtyOptions: [],
      quantities: [],
      ratings: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      },
      sizeOptions: [],
      skuCart: null,
      styles: [],
      totalReviews: 0,
    };
    this.changeStyle = this.changeStyle.bind(this);
    this.setQuantity = this.setQuantity.bind(this);
    this.setSizeQuantity = this.setSizeQuantity.bind(this);
    this.submitItem = this.submitItem.bind(this);
  }

  componentDidMount() {
    const { productId } = this.state;
    return axios.get(`/products/${productId}`)
      .then((result) => {
        console.log('result from ProductDetails ProdId', result);
        const data = result;
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
        axios.get(`/products/${productId}/styles`)
          .then((result) => {
            const data = result;
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
      )
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        axios.get('/reviews/meta', {
          params: {
            product_id: productId,
          },
        })
          .then((metaReviews) => {
            this.setState({
              ratings: metaReviews.ratings,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        axios.get('/reviews', {
          params: {
            page: 1,
            count: 200,
            sort: 'newest',
            product_id: productId,
          },
        })
          .then((reviews) => {
            this.setState({
              totalReviews: reviews.data.results.length,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .then(() => {
        // eslint-disable-next-line react/no-find-dom-node
        ReactDOM.findDOMNode(this).addEventListener('click', (e) => handleAnalytics(e, 'ProductOverview'));
      });
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
      axios.post('/cart', { sku_id: skuCart });
      n += 1;
    }
  }

  render() {
    const {
      images, essentials, productDescription, currentStyle,
      styles, quantities, sizeOptions, isTrue, ratings, totalReviews,
    } = this.state;
    return (
      <div>
        <Grid centered columns={2}>
          <Grid.Row stretched>
            <Grid.Column className="carouselColumn" width={8}>
              <ProductImage images={images} />
            </Grid.Column>
            <Grid.Column width={5}>
              <BuyProduct
                changeStyle={this.changeStyle}
                currentStyle={currentStyle}
                essentials={essentials}
                isTrue={isTrue}
                quantities={quantities}
                ratings={ratings}
                setQuantity={this.setQuantity}
                setSizeQuantity={this.setSizeQuantity}
                sizeOptions={sizeOptions}
                styles={styles}
                submitItem={this.submitItem}
                totalReviews={totalReviews}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row stretched>
            <Grid.Column textAlign="center" width={13}>
              <ProductDescription productDescription={productDescription} essentials={essentials} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
