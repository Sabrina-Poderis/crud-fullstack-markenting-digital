import Joi from "joi";

const formatJoiValidation = (error: Joi.ValidationError | undefined) => {
  return error
    ? { error: true, message: error.message }
    : { error: false };
}

export default formatJoiValidation