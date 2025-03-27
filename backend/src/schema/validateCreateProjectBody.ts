import Joi from "joi";
import formatJoiValidation from "../utils/formatJoiValidation";

const CreateProjectSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  budget: Joi.number().required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  clientId: Joi.number().required(),
});

const validateCreateProjectBody = (data: any) => {
  const { error } = CreateProjectSchema.validate(data);

  return formatJoiValidation(error);
};

export default validateCreateProjectBody;
