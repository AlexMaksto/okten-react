import Joi from "joi";

const carValidator = Joi.object({
    id: Joi.number(),
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'The brand must consist of only letters min 1 max 20 characters',
        'string.required': 'This is mandatory'
    }),
    price: Joi.number().min(0).max(1000000).required(),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required()
})

export {carValidator};