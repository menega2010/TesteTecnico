import { Router } from 'express';
import { validateUserFactory } from '../controller/UserController/UserFactoryController';

const validateUsersRoute = Router();
const validateUserController = validateUserFactory();

validateUsersRoute.post('/', validateUserController.post);

export { validateUsersRoute };
