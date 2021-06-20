/* eslint-disable no-console */
import dayjs from 'dayjs';
import axios from 'axios';

export default (event, module) => {
  event.preventDefault();

  const analyticsRequest = {
    method: 'post',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/interactions/',
    data: {
      element: event.target.outerHTML,
      widget: module,
      time: dayjs().format(),
    },
  };

  axios(analyticsRequest)
    .then((response) => {
      console.log(response);
    });
};
