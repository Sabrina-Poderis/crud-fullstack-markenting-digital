import Joi from 'joi';
import formatJoiValidation from '../utils/formatJoiValidation';

const CreateClientSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    company: Joi.string().required(),
});

const validateCreateClientBody = (data: any) => {
    const { error } = CreateClientSchema.validate(data);

    return formatJoiValidation(error)
}

export default validateCreateClientBody;