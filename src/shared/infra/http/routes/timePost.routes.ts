import { celebrate } from 'celebrate';
import { Router } from 'express';

import { TimeValidateController } from '../../../../modules/time/useCases/validateUser/TimeValidateController';
import { storeTimeValidator } from '../../../../modules/time/useCases/validateUser/validator';

const validatePostTimeRoute = Router();
const validateTimeController = new TimeValidateController();

validatePostTimeRoute.post('/', celebrate(storeTimeValidator), validateTimeController.post);

export { validatePostTimeRoute };
