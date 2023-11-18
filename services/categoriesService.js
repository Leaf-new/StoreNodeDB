const { faker } = require("@faker-js/faker");
const boom = require('@hapi/boom');


class CategorieService{

  constructor(){
    this.categories = [];
    this.generate();
  }

  generate(){
    const limit = 10;
    for(let index = 0; index < limit; index++){
      this.categories.push({
        id: faker.string.uuid(),
        name: faker.commerce.department(),
        isBlock: faker.datatype.boolean(),

      });
    }
  }

  async create(data){
    const newCategorie = {
      id: faker.string.uuid(),
      ...data  // spread operation para concatenar los valores recibidos
    };
    this.categories.push(newCategorie);
    return newCategorie;
  }

  find(){
    return this.categories;
  }

  async findOne(id){
    const categorie = this.categories.find(item => item.id === id);
    if(!categorie){
      throw boom.notFound('categorie not found');
    }
    if(categorie.isBlock){
      throw boom.conflict('categorie is block');
    }
    return product;
  }

  async update(id, changes){
    const index = this.categories.findIndex(item => item.id === id);
    if(index === -1){ // si findIndex no encuntra el elemento devuelve un -1
      throw boom.notFound('categorie not found')
    }
    const categorie = this.categories[index];
    this.categories[index] = {
      ...categorie,
      ...changes
    };
    return this.categories[index];

  }

  async delete(id){
    const index = this.categories.findIndex(item => item.id === id);
    if(index === -1){ // si findIndex no encuntra el elemento devuelve un -1
      throw boom.notFound('categorie not found')
    }
    this.categories.splice(index, 1);
    return { id };
 }

}

module.exports = CategorieService;
