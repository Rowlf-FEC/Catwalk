import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import handleTime from './dayjsConfig';

dayjs.extend(localizedFormat);

test('Formats date in lll format if input is more than 12 hours old', () => {
  const expected = dayjs().subtract(1, 'day').format('ll');
  const actual = handleTime(dayjs().subtract(1, 'day'));
  expect(typeof actual).toBe('string');
  expect(actual).toBe(expected);
});

test('Formats date in "ago" format if input is more than 12 hours old', () => {
  const expected = '2 hours ago';
  const actual = handleTime(dayjs().subtract(2, 'hour'));
  expect(typeof actual).toBe('string');
  expect(actual).toBe(expected);
});
