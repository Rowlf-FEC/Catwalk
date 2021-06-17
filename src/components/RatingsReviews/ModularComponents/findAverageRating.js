export default (ratings) => {
  if (typeof ratings === 'number') {
    return ratings.toFixed(1);
  }

  if (ratings === undefined || ratings === null) {
    return '5.0';
  }

  let sum = 0;
  let divisor = 0;

  Object.keys(ratings).forEach((rating) => {
    sum += Number(rating) * Number(ratings[rating]);
    divisor += Number(ratings[rating]);
  });

  sum /= divisor;
  return sum.toFixed(1);
};
