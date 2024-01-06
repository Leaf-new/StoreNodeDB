const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models');


const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI =`postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
//const URI =`mysql://root:${PASSWORD}@${config.dbHost}:3306/${config.dbName}`


//ya sequelize tiene incorporado el metodo de pool
//cambiamos "postgres" por "mysql" en const URI y dialect, para cambiar de motor

const sequelize = new Sequelize(URI,{
  dialect:"postgres",
  logging: console.log, //false,
});

setupModels(sequelize);

//sequelize.sync();

module.exports = sequelize;
