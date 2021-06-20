/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const axios = require('axios');
const config = require('./src/config');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, (error) => {
  if (error) {
    console.log(`failed to connect to server port: ${PORT}`);
  } else {
    console.log(`connected to the server at ${PORT}`);
  }
});

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

app.post('https://api.imgur.com/3/image', (req, res) => {
  const configImgur = {
    method: req.method,
    url: 'https://api.imgur.com/3/image',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      Authorization: config.ImgurToken,
    },
    data: req.data,
  };

  axios(configImgur)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.all('/*', (req, res) => {
  console.log('Client connected to server taco!');
  const configAtelier = {
    method: req.method,
    url: req.url,
    headers: {
      Authorization: config.AtelierToken,
    },
    data: req.data,
  };

  axios(configAtelier)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.send(error);
    });

  // response will return
  // .then send response back to client
  // .catch send error back to client
  // error handling would be done client side for the
  // sake of the user knowing their request was fulfilled
  // or if something went wrong
});

/*
  const updateHelpfulnessConfig = {
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/reviews/${reviewId}/helpful`,
    headers: {
      Authorization: `${config.token}`,
    },
  };

  axios(updateHelpfulnessConfig)
*/

// remove config import from all files
// create axios request with API key + headers here
