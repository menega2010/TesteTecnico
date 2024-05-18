import { UserRepository } from '../../repository/UserRepository';
import { UserService } from '../../service/UserService';
import { ValidateUserCase } from '../../useCases/validateUserCase';
import { UserController } from './UserController';

const validateUserFactory = () => {
  const userRepository = new UserRepository();
  const userService = new UserService(userRepository);
  const validateUserCase = new ValidateUserCase(userService);
  const validateUserController = new UserController(validateUserCase);

  return validateUserController;
};

export { validateUserFactory };
