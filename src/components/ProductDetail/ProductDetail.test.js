import ProductDetail from './ProductDetail';

test('Should return data from axios request', () => {
  expect.assertions(1);
  return ProductDetail.getProducts()
    .then((data) => {
      expect(data.name).toEqual('Summer Shoes');
    });
});
