const winston = require('winston');

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: 'logger.log'
        })
    ]
});

function log(level , message){
    logger.log({
        level,
        message
      });
}

module.exports = log;