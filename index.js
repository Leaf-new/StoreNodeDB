console.log('my app');

const express = require('express');
const { faker } = require("@faker-js/faker");

// Todos los endpoints especificos van antes de los endopoints dinamicos
// es decir todos los endpoints que usen parametros por ejemplo, van siempre al final

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
  res.send('wenas server con express')
})

app.get('/new-endpoint', (req, res)=>{
  res.send('nuevo endpoint')
})

app.get('/products', (req, res)=>{
  const products =[];
  const{ size }= req.query; // parametros tipo query se recogen de esta manera
  const limit = size || 10;
  for (let index = 0; index < limit; index++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.url(),
    });
  }
  res.json([products]);
});


app.get('/products/filter', (req,res)=>{
  res.send('yo soy un filter');
});

app.get('/users',(req, res)=>{
  const{ limit, offset }= req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    });
  } else{
    res.send('no hay parametros')
  }
})

app.get('/products/:id', (req, res) =>{
  const { id } = req.params;
    res.json({
    id,
    name: 'Product 2',
    price: 2000
  });
});

app.get('/categorias/:categoryId/products/:productId', (req, res)=>{
  const{categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

app.listen(port, () =>{
  console.log('Mi port' + port);
});
