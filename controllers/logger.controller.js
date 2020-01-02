const winston = require('winston');
require('winston-daily-rotate-file');

// logger setting using DailyRotateFile
var transport = new (winston.transports.DailyRotateFile)({
    filename: 'logs/log-%DATE%.log',
    datePattern: 'DD-MM-YYYY',
    auditFile: 'logs/audit.json',
    maxSize: '20m',
    maxFiles: '30d',
    format: winston.format.combine(
        winston.format.timestamp({ format: 'DD/MM/YYYY HH:mm:ss' }),
        winston.format.simple(),
    ),
});

// export logger instance
exports.logger = winston.createLogger({ transports: [transport] });