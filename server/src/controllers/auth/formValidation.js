import Joi from 'joi';

const userpass = {
  body: {
    username: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  },
};

export default userpass; // For now...

