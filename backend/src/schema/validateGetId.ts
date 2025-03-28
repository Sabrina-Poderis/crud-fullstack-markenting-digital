import Joi from 'joi';
import formatJoiValidation from '../utils/formatJoiValidation';

const CreateClientSchema = Joi.object({
    id: Joi.number().required(),
});

const validateGetId = (data: any) => {
    const { error } = CreateClientSchema.validate(data);

    return formatJoiValidation(error)
}

export default validateGetId;