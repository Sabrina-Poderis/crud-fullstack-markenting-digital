import Joi from "joi";

const formatJoiValidation = (error: Joi.ValidationError | undefined) => {
  return error
    ? { hasError: true, message: error.message }
    : { hasError: false };
}

export default formatJoiValidation