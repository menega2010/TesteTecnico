import { celebrate } from 'celebrate';
import { Router } from 'express';
import { UserValidateController } from '../../../../modules/userValidate/useCases/validateUser/UserValidateController';
import { validateUserValidator } from '../../../../modules/userValidate/useCases/validateUser/validator';

const validateUsersRoute = Router();
const validateUserController = new UserValidateController();

validateUsersRoute.post('/', celebrate(validateUserValidator) ,validateUserController.post);

export { validateUsersRoute };
