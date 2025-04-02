import Joi from 'joi';

const CreateProjectSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  budget: Joi.number().required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  clientId: Joi.number().required(),
});

export default CreateProjectSchema