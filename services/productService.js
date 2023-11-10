const { faker } = require("@faker-js/faker");

class ProductService {

  constructor(){
    this.products =[];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++){
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(),10),
        image: faker.image.url(),
      });
    }
  }

  create(data){
    const newProduct = {
      id: faker.string.uuid(),
      ...data // spread operation para concatenar los valores recibidos
    }
    this.products.push(newProduct);
    return newProduct;
  }

  find(){
    return this.products;
  }

  findOne(id){
    return this.products.find(item => item.id === id);
  }

  update(id, changes){
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){ // si findIndex no encuntra el elemento devuelve un -1
      throw new Error('product not found')
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  delete(id){
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){ // si findIndex no encuntra el elemento devuelve un -1
      throw new Error('product not found')
    }
    this.products.splice(index, 1);
    return { id };

  }

}

module.exports = ProductService;
