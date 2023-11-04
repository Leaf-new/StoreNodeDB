const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
  res.send('Buenas, estas en Categories');
});

router.get('/:categoryId/products/:productId', (req, res)=>{
  const{categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
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

module.exports=router;
