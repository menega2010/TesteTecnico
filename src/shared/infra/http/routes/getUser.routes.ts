import { Router } from 'express';

import { UserValidateController } from '../../../../modules/userValidate/useCases/validateUser/UserValidateController';

const validateGetUserRoute = Router();
const validateTimeController = new UserValidateController();

validateGetUserRoute.get('/', validateTimeController.get);

export { validateGetUserRoute };
