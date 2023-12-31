'use strict';

const{ UserSchema, USER_TABLE}= require('./../models/user.model');
const{ ProductSchema, PRODUCT_TABLE}= require('./../models/product.model');
const{ CategorieSchema, CATEGORIE_TABLE}= require('./../models/categorie.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(CATEGORIE_TABLE, CategorieSchema);

  },

  async down (queryInterface) {

    await queryInterface.dropTable(USER_TABLE);

  }
};
