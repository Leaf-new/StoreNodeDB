const express = require('express');

const CategorieService = require('../services/categoriesService');

const router = express.Router();
const service = new CategorieService;

router.get('/', (req, res)=>{
  const categorie = service.find();
  res.json(categorie);
});

router.get('/:id', (req, res)=>{
  const{ id } = req.params;
  const body = req.body;
  const categorie = service.findOne(id, body);
  res.json(categorie);
});

router.post('/', (req, res)=> {
  const body = req.body;
  const newCategorie = service.create(body);
  res.status(201).json(newCategorie);
});

router.patch('/:id', (req, res)=> {
  const{ id } = req.params;
  const body = req.body;
  const categorie = service.update(id, body);
  res.json(categorie);
});

router.delete('/:id', (req, res)=> {
  const{ id } = req.params;
  const categorie = service.delete(id);
  res.json(categorie);
});

module.exports=router;
