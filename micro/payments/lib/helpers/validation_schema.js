import Joi from '@hapi/joi';

const authSchema = Joi.object({
  username: Joi.string().lowercase().required(),
  password: Joi.string().min(6).required(),
})

export default authSchema;