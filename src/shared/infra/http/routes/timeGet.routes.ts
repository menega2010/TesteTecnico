import { Router } from 'express';

import { TimeValidateController } from '../../../../modules/time/useCases/validateUser/TimeValidateController';

const validateGetTimeRoute = Router();
const validateTimeController = new TimeValidateController();

validateGetTimeRoute.get('/', validateTimeController.get);

export { validateGetTimeRoute };
