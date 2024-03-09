import Joi from "joi";

export const BlogValidator = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required()
})

// export const BlogValidator = Joi.array().items(
//   Joi.object({
//     paslonName: Joi.string().required(),
//     number: Joi.number().required(),
//     vision: Joi.string().required()
//   })
// );