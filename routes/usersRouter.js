const express = require('express');

const UserService = require('../services/userService');

const router = express.Router();
const service = new UserService;

router.get('/', async (req, res)=>{
  const user =  await service.find();
  res.json(user);
})

router.get('/:id', async (req, res, next)=>{
try {
  const { id } = req.params;
  const user = await service.findOne(id);
  res.json(user);
} catch (error) {
  next(error)
}
})

router.post('/', async (req, res)=> {
  const body = req.body;
  const newUser = await service.create(body);
  res.status(201).json(newUser);
});

router.patch('/:id', async (req, res, next)=> {         //put y patch en teoria funcionan
try {
  const{ id } = req.params;                 //de la misma forma pero patch es para informacion parcial
  const body = req.body;
  const user = await service.update(id, body);
  res.json(user);
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
