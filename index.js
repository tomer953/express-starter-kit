require('dotenv').config() // .env file support for configuration
const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('./controllers/logger.controller').logger
const errorHandler = require('./controllers/errors.controller').errorHandler

const EXPRESS_PORT = process.env.EXPRESS_PORT || 3000

// connect to db (mongodb + mongoose)
const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

// import routes
const cats = require('./routes/cats.router');
const dogs = require('./routes/dogs.router');

// middlewares
app.use(cors());                // allow cors origin
app.use(express.json());        // accept json
app.use('/cats', cats);         // route handler for '/cats'
app.use('/dogs', dogs);         // route handler for '/dogs'
app.use(errorHandler);          // custom errorhandler middleware

// start app
app.listen(EXPRESS_PORT, () => console.log(`Example app listening on port ${EXPRESS_PORT}!`));
logger.info(`Example app listening on port ${EXPRESS_PORT}!`);