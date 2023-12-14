const express = require('express');

const ProductService = require('../services/productService');
const validatorHandler = require('../middlewares/validatorHandler');
const {createProductSchema, updateProductSchema, getProductSchema} = require('../schemas/productSchema');


const router = express.Router();
const service = new ProductService();

router.get('/', async (req, res)=>{
  const product =  await service.find();
  res.json(product);
});


router.get('/filter', (req,res)=>{
  res.send('yo soy un filter');
});


router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) =>{
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }

});

router.post('/',
  validatorHandler(createProductSchema,'body'),
  async (req, res)=> {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id',
validatorHandler(getProductSchema, 'params'),
validatorHandler(updateProductSchema,'body'),
async (req, res, next)=> {
  try {
    const{ id } = req.params;
    const body = req.body;
    const product =  await service.update(id, body);
    res.json(product);

  } catch (error) {
    next(error);
  }

});

router.delete('/:id', async (req, res, next)=> {
  try {
    const{ id } =req.params;
    const rta = await service.delete(id);
    res.json(rta);
  } catch (error) {
    next(error);
  }

});

module.exports = router;
