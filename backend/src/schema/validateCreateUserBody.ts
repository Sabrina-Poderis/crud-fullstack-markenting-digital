import Joi from 'joi';
import formatJoiValidation from '../utils/formatJoiValidation';

const CreateUserSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

const validateCreateUserBody = (data: any) => {
    const { error } = CreateUserSchema.validate(data);

    return formatJoiValidation(error)
}

export default validateCreateUserBody;