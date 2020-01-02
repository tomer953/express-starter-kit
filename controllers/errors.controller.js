const logger = require('./logger.controller').logger

// create custom errorHandler, this will use as the last middleware
// use next(err) on normal functions to pass the error to this middleware
exports.errorHandler = function errorHandler(err, req, res, next) {
    console.error(err);
    logger.error(err);

    let customError = {
        statusCode: err.statusCode || 500,
        error: err.message,
        stack: err.stack
    }

    res.status(customError.statusCode).send(customError);
}