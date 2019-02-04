const logger = require('./utils/logger');
const app = require('./app');
const config = require('./config');

const server = app.listen(config.serverPort, () => { /* eslint-disable-line */
  logger.info(`Server is running on port ${config.serverPort}`);
});
