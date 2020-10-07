// server.js
const express = require( 'express');
const path = require('path');
const createError = require('http-errors');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const RoutesRegister = require('./routes/routes-register');

const result = require('dotenv').config({ path: `${__dirname}/.env` });


const app = express();

// cors documentation
// https://expressjs.com/en/resources/middleware/cors.html
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

RoutesRegister.registerIn(app);

app.use(express.static(path.join(__dirname, 'dist')));
app.use(require('connect-history-api-fallback')());
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  console.log('mensaje de error');
  console.log(err);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 5000;
app.listen(port);
console.log(`server started ${port}`);
module.exports = app;