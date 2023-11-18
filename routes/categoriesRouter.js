const express = require('express');

const CategorieService = require('../services/categoriesService');

const router = express.Router();
const service = new CategorieService;

router.get('/', async (req, res)=>{
  const categorie = await service.find();
  res.json(categorie);
});

router.get('/:id', async (req, res, next)=>{
  try {
    const{ id } = req.params;
    const categorie = await service.findOne(id);
    res.json(categorie);
  } catch (error) {
    next(error);
  }

});

router.post('/', async (req, res)=> {
  const body = req.body;
  const newCategorie = await service.create(body);
  res.status(201).json(newCategorie);
});

router.patch('/:id', async (req, res, next)=> {
  try {
    const{ id } = req.params;
  const body = req.body;
  const categorie = await service.update(id, body);
  res.json(categorie);
  } catch (error) {
    next(error)
  }


});

router.delete('/:id', async (req, res, next)=> {
  try {
    const{ id } = req.params;
    const categorie = await service.delete(id);
    res.json(categorie);
  } catch (error) {
    next(error)
  }

});

module.exports=router;
