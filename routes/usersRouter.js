const express = require('express');
const { faker } = require("@faker-js/faker");

const UserService = require('../services/userService');
const router = express.Router();

const service = new UserService;

router.get('/',(req, res)=>{
  const user = service.find();
  res.json(user);
})

router.get('/:id',(req, res)=>{
  const { id } = req.params;
  const user = service.findOne(id);
  res.json(user);
})

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
  const user = service.update(id, body);
  res.json(user);
});

router.delete('/:id', (req, res)=> {
  const{ id } =req.params;
  const rta = service.delete(id);
  res.json(rta);
});

module.exports = router;
