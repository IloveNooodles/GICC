import { default as Joi } from 'joi';
import { JRegisterMemberRequestBody } from '../controllers/user.validation.js'

export const RequestValidation = (s) => {
    return async (req, res, next) => {
        try {
            let valid;
            for (const loc of Object.keys(s)) {
                valid = await s[loc].validate(req[loc]);
               
                if(valid.error) {
                    return res.status(400).json({
                        errorCode: 'INVALID_REQUEST'
                    });
                }
            }
            return next(null);
        } catch (e) {
            if (e.name === 'ValidationError') {
                console.log(`Validation error: ${req.originalUrl}`);
                return res.status(400).json({
                    errorCode: 'INVALID_REQUEST',
                    errors: e.details,
                });
            }

            return next(e);
        }
    };
}
