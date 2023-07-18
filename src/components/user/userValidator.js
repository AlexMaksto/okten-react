import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().required(),
    userName: Joi.string().required(),
    email: Joi.string().pattern(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/).required()
})

export {userValidator}