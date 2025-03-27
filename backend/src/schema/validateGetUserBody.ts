import Joi from 'joi';
import formatJoiValidation from '../utils/formatJoiValidation';

const GetUserSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

const validateGetUserBody = (data: any) => {
    const { error } = GetUserSchema.validate(data);

    return formatJoiValidation(error)
}

export default validateGetUserBody;