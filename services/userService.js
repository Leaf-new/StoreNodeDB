// todavia no se a instanciado en usersRouter
const { faker } = require("@faker-js/faker");

class usersService{

  constructor(){
    this.user = [];
    this.generate();
  }

  generate(){
    const limit = 50;
    for (let index = 0; index < limit; index++){
      this.user.push({
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        lastname: faker.person.lastName(),
        gender: faker.person.gender(),
        email: faker.internet.email(),
      });
  }
 }

  create(){
    const newUser = {
      id: faker.string.uuid(),
      ...data // spread operation para concatenar los valores recibidos
    }
    this.user.push(newUser);
    return newUser;
  }

  find(){
    return this.user;
  }

  findOne(id){
    return this.user.find(item => item.id === id);
  }

  update(id, changes){
    const index = this.user.findIndex(item => item.id === id);
    if(index === -1){ // si findIndex no encuntra el elemento devuelve un -1
      throw new Error('user not found')
    }
    const user = this.user[index];
    this.user[index] = {
      ...user,
      ...changes
    };
    return this.user[index];
  }

  delete(id){
    const index = this.user.findIndex(item => item.id === id);
    if(index === -1){ // si findIndex no encuntra el elemento devuelve un -1
      throw new Error('user not found')
    }
    this.user.splice(index, 1);
    return { id };
  }

}

module.exports = usersService;
