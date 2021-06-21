import axios from 'axios';

const getReviews = (productId, sortMethod = 'relevant') => (
  axios.get('/reviews/', {
    params: {
      page: 1,
      count: 200,
      sort: sortMethod,
      product_id: productId,
    },
  })
);

const getMetaReviews = (productId) => (
  axios.get('/meta', {
    params: {
      product_id: productId,
    },
  })
);

const getProductName = (productId) => (
  axios.get(`/products/${productId}`, {
  })
);

export {
  getReviews,
  getMetaReviews,
  getProductName,
};
