const express = require('express');

const ProductService = require('../services/productService')

const router = express.Router();
const service = new ProductService();

router.get('/', (req, res)=>{
  const product = service.find();
  res.json(product);
});


router.get('/filter', (req,res)=>{
  res.send('yo soy un filter');
});


router.get('/:id', (req, res) =>{
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});

router.post('/', (req, res)=> {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
    }
  );
});

router.patch('/:id', (req, res)=> {         //put y patch en teoria funcionan
  const{ id } = req.params;                 //de la misma forma pero patch es para informacion parcial
  const body = req.body;
  res.json({
    message: 'updated',
    data: body,
    id,
    }
  );
});

router.delete('/:id', (req, res)=> {
  const{ id } =req.params;
  res.json({
    message: 'deleted',
    id,
    }
  );
});

module.exports = router;
