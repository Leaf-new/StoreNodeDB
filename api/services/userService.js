const { faker } = require("@faker-js/faker");
const boom = require('@hapi/boom');

const pool = require('../libs/postgresPool');

class UserService {
  constructor() {
    this.users =[];
    this.generate();
    this.pool = pool;
    this.pool.on('error',(err) => console.error(err));
  }
  generate(){
    const limit = 50;
    for (let index = 0; index < limit; index++){
      this.users.push({
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        lastname: faker.person.lastName(),
        gender: faker.person.gender(),
        email: faker.internet.email(),
        isBlock: faker.datatype.boolean(),
      });
  }
 }

  async create(data) {
    return data;
  }

  async find() {
    const query = 'SELECT * FROM tasks';
    const rta = await this.pool.query(query);
    return rta.rows;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}


module.exports = UserService;
