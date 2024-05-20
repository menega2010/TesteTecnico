import { Joi, Segments } from 'celebrate';

import { customMessage } from '../../../../utils/errors';

export const deleteTimeValidator = {
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required().messages(customMessage('name')),
    userId: Joi.string().required().messages(customMessage('name')),
    enterTime: Joi.string().optional().messages(customMessage('name')),
    exitTime: Joi.string().optional().messages(customMessage('name'))
  })
};

export const storeTimeValidator = {
  [Segments.BODY]: Joi.object().keys({
    userId: Joi.string().required().messages(customMessage('name')),
    enterTime: Joi.string().optional().messages(customMessage('name')),
    exitTime: Joi.string().optional().messages(customMessage('name'))
  })
};
