import { Joi, Segments } from 'celebrate';

import { customMessage } from '../../../../utils/errors';

const validateUserValidator = {
  [Segments.BODY]: Joi.object().keys({
    code: Joi.number().required().messages(customMessage('name')),
  })
};

export { validateUserValidator };
