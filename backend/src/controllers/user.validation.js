import Joi from 'joi';
import _ from 'lodash';

export const JRegisterMemberRequestBody = Joi.object({
        fullName: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
        institution: Joi.string().required(),
        faculty: Joi.string().required(),
        teamCode: Joi.string().required(),
        birthDate: Joi.string().required(),
    });

    const schema = Joi.object({ 
        name: Joi.string() .min(6) .required(),
        email: Joi.string() .min(6) .required() .email(),
        password: Joi.string() .min(6) .required() 
    });