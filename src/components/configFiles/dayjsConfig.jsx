import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);
dayjs.extend(updateLocale);
dayjs.extend(relativeTime);
dayjs.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years',
  },
});

// COPY/PASTE THESE INTO THE FILE YOU WANT TO USE HANDLETIME:
// import dayjs from 'dayjs';
// import handleTime from '../configFiles/dayjsConfig';

// Use 'dayjs('YYYY-MM-DDTHH:MM:SS)' to create an instance of a dayjs object
// Example: dayjs('2018-04-04T16:00:00')

// Pass in the time you want to check
// handleTime checks given time against the current time
// if given time is within 12 hours, it returns "xxx time ago",
// if given time is more than 12 houras ago, it returns
// the given date in 'Mmm D, YYYY, HH:MM AM/PM' format
const handleTime = (givenTime) => {
  if (dayjs().subtract(12, 'hours').isBefore(givenTime)) {
    return givenTime.fromNow();
  }
  return givenTime.format('lll');
};

export default handleTime;
