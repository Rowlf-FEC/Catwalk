import SubmitReviewForm from '../ListModifierButtons/SubmitReviewForm';

xtest('Find average rating when given an object of ratings', () => {
  const ratings = {
    3: 1,
    4: 5,
    5: 1,
  };
  const expected = '4.0';
  const actual = findAverageRating(ratings);
  expect(typeof actual).toBe('string');
  expect(actual).toBe(expected);
});
