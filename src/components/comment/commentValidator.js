import Joi from "joi";

const commentValidator = Joi.object({
    postId: Joi.required(),
    name: Joi.string().required(),
    email: Joi.string().pattern(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/).required(),
    body: Joi.string().required()
})

export {commentValidator}