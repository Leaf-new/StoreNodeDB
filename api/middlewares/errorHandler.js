const { ValidationError } = require('sequelize');
const boom = require('@hapi/boom');

function logErrors (err, req, res, next){
  console.log('soy log errors');
  console.error(err);
  next(err);                           // es un middleware de tipo error porque mandamos el error
}

function errorHandler(err, req, res, next){
  console.log('soy errorhandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function BoomErrorHandler(err, req, res, next){
  if (err.isBoom){
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else{
      next(err);
  }
}

function QueryErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    const { name, fields, parent } = err;
    res.status(409).json({
      name: name,
      message: parent.detail,
      field: fields,
      parameters: parent.parameters,
      errors: err.errors
    });
  } else{
      next(err);
  }
}




module.exports={logErrors, errorHandler, BoomErrorHandler, QueryErrorHandler}

//estos middlewares es mejor definirlos despues de crear el routing


//https://platzi.com/comentario/3889360/
// npm install express-async-errors
//Solo debemos importarlo en el index.js y la función de routing
//quedará como estaba.
//require("express-async-errors");
