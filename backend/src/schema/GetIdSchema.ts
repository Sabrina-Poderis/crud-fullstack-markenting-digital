import Joi from 'joi';

const GetIdSchema = Joi.object({
    id: Joi.number().required(),
});

export default GetIdSchema