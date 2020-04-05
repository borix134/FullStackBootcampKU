const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes')
const path = require('path')

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/GoogleBooks', { useNewUrlParser: true, useUnifiedTopology: true });

const WHITE_LIST = [
    'http://localhost:3001',
    'http://localhost:3001/',
  ];
  
const corsOptions = {
  origin: (origin, callback) => {
    console.log('Origin: ', origin); // eslint-disable-line no-console
    if (WHITE_LIST.includes(origin) || !origin) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(routes);

if (process.env.NODE_ENV === 'production') {
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`CORS-enabled web server listening on port: ${PORT}`);
});

module.exports = app;
