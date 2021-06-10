export default (ratings) => {
  let sum = 0;
  let divisor = 0;

  Object.keys(ratings).forEach((rating) => {
    sum += Number(rating) * Number(ratings[rating]);
    divisor += Number(ratings[rating]);
  });

  sum /= divisor;
  return sum;
}