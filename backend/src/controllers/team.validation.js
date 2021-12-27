import Joi from 'joi';
import _ from 'lodash';

export const JTeamDataRequestHeader = Joi.object({
    Bearer: Joi.string().required(),
}); 