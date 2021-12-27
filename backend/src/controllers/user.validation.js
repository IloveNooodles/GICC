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

export const JRegisterLeaderRequestBody = Joi.object({
        fullName: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
        institution: Joi.string().required(),
        faculty: Joi.string().required(),
        teamName: Joi.string().required(),
        referralCode: Joi.string().required(),
        birthDate: Joi.string().required(),
    }); 

export const JVerifyEmailRequestQuery = Joi.object({
        code: Joi.string().required(),
    }); 

export const JSignInRequestBody = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
    }); 

export const JChangePasswordRequestHeader = Joi.object({
        Bearer: Joi.string().required(),
    }); 

export const JChangePasswordRequestBody = Joi.object({
        oldPassword: Joi.string().required(),
        newPassword: Joi.string().required(),
    }); 