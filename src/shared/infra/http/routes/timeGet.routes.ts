import { Router } from 'express';
import { validateTimeFactory } from '../../../../modules/time/infra/controller/TimeFactoryController';

const validateGetTimeRoute = Router();
const validateTimeController = validateTimeFactory();

validateGetTimeRoute.get('/', validateTimeController.get);

export { validateGetTimeRoute };
