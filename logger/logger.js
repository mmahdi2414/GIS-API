const { createLogger, format, transports } = require('winston');
const { combine, timestamp, prettyPrint} = format;
const level = 'info';

const logger = createLogger({
    level,
    format: combine(
        timestamp(),
        prettyPrint()
    ),
    transports: [
        new transports.Console(),
        new transports.File({
            filename: 'logger.log'
        })
    ]
});

function log(level , message){
    logger.log({
        message,
        level
      });
}


module.exports = log;