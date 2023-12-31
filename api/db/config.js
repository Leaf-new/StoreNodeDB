const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI =`postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
//const URI =`mysql://root:${PASSWORD}@${config.dbHost}:3306/${config.dbName}`

module.exports= {
  development: {
    url: URI,
    dialect: 'postgres',
  },
  production: {
    url: URI,
    dialect: 'postgres',
  },
}
