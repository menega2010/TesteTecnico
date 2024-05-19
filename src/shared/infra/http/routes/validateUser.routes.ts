import { Router } from 'express';
import { validateUserFactory } from '../../../../modules/user/infra/controller/UserFactoryController';

const validateUsersRoute = Router();
const validateUserController = validateUserFactory();

validateUsersRoute.post('/', validateUserController.post);

export { validateUsersRoute };
