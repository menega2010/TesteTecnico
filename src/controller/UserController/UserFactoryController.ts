import { UserController } from './UserController';

const validateUserFactory = () => {
  const validateUserController = new UserController();

  return validateUserController;
};

export { validateUserFactory };
