import { Router } from 'express';
import { validateUsersRoute } from './validateUser.routes';

const routes = Router();

routes.use('/', validateUsersRoute);

export { routes };
