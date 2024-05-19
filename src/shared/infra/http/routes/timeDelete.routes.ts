import { Router } from 'express';
import { validateTimeFactory } from '../../../../modules/time/infra/controller/TimeFactoryController';

const validateDeleteTimeRoute = Router();
const validateTimeController = validateTimeFactory();

validateDeleteTimeRoute.delete('/', validateTimeController.delete);

export { validateDeleteTimeRoute };
