import { Schema } from 'joi';

interface SchemaOptions {
  params?: Schema;
  body?: Schema;
}

const validateSchema = (schemas: SchemaOptions) => {
  return (req: any, res: any, next: any) => {
    const validationErrors = [];

    if (schemas.params) {
      const { error } = schemas.params.validate(req.params, { abortEarly: false });
      if (error) {
        validationErrors.push(...error.details.map((detail) => detail.message));
      }
    }

    if (schemas.body) {
      const { error } = schemas.body.validate(req.body, { abortEarly: false });
      if (error) {
        validationErrors.push(...error.details.map((detail) => detail.message));
      }
    }
    
    if (validationErrors.length > 0) {
      return res.status(400).json({ errors: validationErrors });
    }

    next();
  };
};

export default validateSchema;
