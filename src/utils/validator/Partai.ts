import Joi from "joi";

export const PartaiValidator = Joi.object({
    partaiName: Joi.string().required(),
    leader: Joi.string().required(),
    vision: Joi.string().required(),
    address: Joi.string().required()
})

// export const PartaiValidator = Joi.array().items(
//   Joi.object({
//     paslonName: Joi.string().required(),
//     number: Joi.number().required(),
//     vision: Joi.string().required()
//   })
// );