import Joi from "joi";

export const UserValidator = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
})

// export const UserValidator = Joi.array().items(
//   Joi.object({
//     paslonName: Joi.string().required(),
//     number: Joi.number().required(),
//     vision: Joi.string().required()
//   })
// );