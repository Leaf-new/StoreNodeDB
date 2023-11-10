const { faker } = require("@faker-js/faker");

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
        name: faker.commerce.department()
      });
    }
  }

  create(data){
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

  findOne(id){
    return this.categories.find(item => item.id === id);
  }

  update(id, changes){
    const index = this.categories.findIndex(item => item.id === id);
    if(index === -1){ // si findIndex no encuntra el elemento devuelve un -1
      throw new Error('categorie not found')
    }
    const categorie = this.categories[index];
    this.categories[index] = {
      ...categorie,
      ...changes
    };
    return this.categories[index];

  }

  delete(id){
    const index = this.categories.findIndex(item => item.id === id);
    if(index === -1){ // si findIndex no encuntra el elemento devuelve un -1
      throw new Error('categorie not found')
    }
    this.categories.splice(index, 1);
    return { id };
 }

}

module.exports = CategorieService;
