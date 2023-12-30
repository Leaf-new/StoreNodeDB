const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models');


const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI =`postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

//ya sequelize tiene incorporado el metodo de pool

const sequelize = new Sequelize(URI,{
  dialect:'postgres',
  logging: false //console.log,
});

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;
