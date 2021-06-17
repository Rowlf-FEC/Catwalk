import axios from 'axios';
import config from '../../config';

const getReviews = (productId, sortMethod = 'relevant') => (
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/reviews/', {
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
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/reviews/meta', {
    headers: {
      Authorization: `${config.token}`,
    },
    params: {
      product_id: productId,
    },
  })
);

export {
  getReviews,
  getMetaReviews,
};
