const boom = require('@hapi/boom');
// esto es un closure nos permite crear middlewares de forma dinamica
function validatorHandler (schema, property){
  return (req, res, next) =>{
    const data = req[property];
    const { error } = schema.validate(data, {abortEarly: false});
    if(error){
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler
