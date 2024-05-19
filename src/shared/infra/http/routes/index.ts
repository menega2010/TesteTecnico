import { Router } from 'express';
import { validateUsersRoute } from './validateUser.routes';

const routes = Router();

routes.use('/validate', validateUsersRoute);
// routes.use('/getTime', validateGetTimeRoute);
// routes.use('/addTime', validatePostTimeRoute);
// routes.use('/deleteTime', validateDeleteTimeRoute);

export { routes };
