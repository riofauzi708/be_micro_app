import Joi from "joi";

export const PaslonValidator = Joi.object({
    paslonName: Joi.string().required(),
    number: Joi.number().required(),
    vision: Joi.string().required()
})

// export const PaslonValidator = Joi.array().items(
//   Joi.object({
//     paslonName: Joi.string().required(),
//     number: Joi.number().required(),
//     vision: Joi.string().required()
//   })
// );