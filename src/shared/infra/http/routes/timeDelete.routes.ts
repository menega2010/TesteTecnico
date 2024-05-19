import { celebrate } from 'celebrate';
import { Router } from 'express';
import { TimeValidateController } from '../../../../modules/time/useCases/validateUser/TimeValidateController';
import { deleteTimeValidator } from '../../../../modules/time/useCases/validateUser/validator';

const validateDeleteTimeRoute = Router();
const validateTimeController = new TimeValidateController();

validateDeleteTimeRoute.delete('/', celebrate(deleteTimeValidator) ,validateTimeController.delete);

export { validateDeleteTimeRoute };
