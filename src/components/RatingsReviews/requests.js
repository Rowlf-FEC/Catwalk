import axios from 'axios';

const getReviews = (productId, sortMethod = 'relevant') => (
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/reviews/', {
    params: {
      page: 1,
      count: 200,
      sort: sortMethod,
      product_id: productId,
    },
  })
);

const getMetaReviews = (productId) => (
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/meta', {
    params: {
      product_id: productId,
    },
  })
);

const getProductName = (productId) => (
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/${productId}`, {
  })
);

export {
  getReviews,
  getMetaReviews,
  getProductName,
};
