const express = require('express'),
  app = express(),
  cors = require('cors'),
  usersCtrl = require('./controllers/users'),
  fightersCtrl = require('./controllers/fighters'),
  fightsCtrl = require('./controllers/fights'),
  eventsCtrl = require('./controllers/events'),
  authCtrl = require('./controllers/auth'),
  path = require('path'),
  serverless = require('serverless-http');

require('dotenv').config();

app.use(express.urlencoded({ extended: true }));

//all requests will handle json
app.use(express.json());

//cors
app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
    allowCrossDomain: true,
  })
);

//controllers
app.use('./auth', authCtrl);
app.use('/users', usersCtrl);
app.use('/fighters', fightersCtrl);
app.use('/fights', fightsCtrl);
app.use('/events', eventsCtrl);

// path to react build
app.use(express.static(path.join(__dirname, '../../reactjs/build')));

//the home page
app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../../reactjs/build', 'index.html'));
});

//error handling middleware
app.use((req, res, next) => {
  const error = new Error('Not Found!');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
      status: error.status,
    },
  });
});

module.exports = serverless(app); //app;
