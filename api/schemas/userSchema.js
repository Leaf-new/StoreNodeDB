const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(25);
const lastName = Joi.string().min(3).max(25);
const gender = Joi.string().min(3).max(25);
const email = Joi.string().email();


const createUserSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  gender: gender.required(),
  email: email.required(),

});

const updateUserSchema = Joi.object({
  name: name,
  lastName: lastName,
  gender: gender,
  email: email,

});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports= {createUserSchema,updateUserSchema, getUserSchema}
