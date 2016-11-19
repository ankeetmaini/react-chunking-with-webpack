const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const fs = require('fs');

const app = express();
const OUTPUT_PATH = path.resolve(__dirname, 'dist');
const compiler = webpack(webpackConfig);

app.use(express.static(OUTPUT_PATH));

compiler.watch({
  aggregateTimeout: 300,
  poll: true,
}, (err) => err && console.error('Error: ', err));

app.get('*', (req, res) => {
  // handle annoying favicon.ico requests
  if (req.url === '/favicon.ico') {
    res.status(200).send({'Content-Type': 'image/x-icon'});
    res.end();
    return;
  }
  res.send(fs.readFileSync(path.resolve(OUTPUT_PATH, 'index.html'), 'utf8'));
});

app.listen(3000, () => console.log('App listening at 3000.'));