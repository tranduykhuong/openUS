const express = require('express');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const Data = require('./models/dataModel')

const interviewRoutes = require('./routes/interviewRoutes');

const limiter = rateLimit({
  // limiter is now become a middleware function
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try this again in an hour!',
}); // define how many requests per IP we are going to allow in a certain of time

const app = express();
app.use(cors());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

app.use(express.json({ limit: '10mb' }));

app.use('/api/v1/interview', interviewRoutes)

app.post('/api/v1/addData', async (req, res, next) => { 
  const { question, urlVideo } = req.body || {};
  const data = await Data.create({ question, urlVideo });
  
  return res.status(200).json({
    data
  });
});


module.exports = app;
