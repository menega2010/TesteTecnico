import { Request, Response } from 'express';
import { UserRepository } from '../../repository/UserRepository';
import { UserService } from '../../service/UserService';
import { ValidateUserCase } from '../../useCases/validateUserCase';

const factory = () => {
  const userRepository = new UserRepository();
  const userService = new UserService(userRepository);
  const useCase = new ValidateUserCase(userService);
  return useCase;
};

export class UserController {
  constructor() {}

  async post(req: Request, resp: Response) {
    const { code } = req.body;
    const statusValidate = await factory().validateUser(code);

    statusValidate === 200
      ? resp.status(statusValidate).json({ message: 'Login efetuado com sucesso!' })
      : resp.status(statusValidate).json({ message: 'Código inválido!' });
  }
}
