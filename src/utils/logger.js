const debug = require('debug');

// Create namespace for different log types
const loggers = {
    info: debug('app:info'),
    error: debug('app:error'),
    debug: debug('app:debug')
};

// Configure loggers to use console.log and console.error
loggers.info.log = console.log.bind(console);
loggers.error.log = console.error.bind(console);
loggers.debug.log = console.log.bind(console);

const logger = {
    info: (message, data = '') => {
        loggers.info(`${message}`, data);
    },
    error: (message, error = '') => {
        loggers.error(`${message}`, error);
    },
    debug: (message, data = '') => {
        loggers.debug(`${message}`, data);
    }
};

module.exports = logger;