import axios from 'axios';
import config from '../../config';

const getReviews = (productId, sortMethod = 'relevant') => (
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews/', {
    headers: {
      Authorization: `${config.token}`,
    },
    params: {
      page: 1,
      count: 200,
      sort: sortMethod,
      product_id: productId,
    },
  })
);

const getMetaReviews = (productId) => (
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews/meta', {
    headers: {
      Authorization: `${config.token}`,
    },
    params: {
      product_id: productId,
    },
  })
);

const getProductName = (productId) => (
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${productId}`, {
    headers: {
      Authorization: `${config.token}`,
    },
  })
);

export {
  getReviews,
  getMetaReviews,
  getProductName,
};
