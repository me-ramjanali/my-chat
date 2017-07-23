import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
// import mongo from 'mongodb';
// import mongoose from 'mongoose';
// var db = mongoose.connection;

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

// import books from './routes/books';

let app = express();

app.use(bodyParser.json());

// app.use('/api/books', books);

const compiler = webpack(webpackConfig);

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000, () => console.log('Running on localhost:3000'));
