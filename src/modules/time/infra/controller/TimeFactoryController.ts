import { TimeController } from './TimeController';

const validateTimeFactory = () => {
  const validateTimeController = new TimeController();

  return validateTimeController;
};

export { validateTimeFactory };
