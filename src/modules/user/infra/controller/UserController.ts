import { Request, Response } from 'express';
import { ValidateUserCase } from '../../../useCases/validateUser/ValidateUserCase';
import { UserRepository } from '../repository/UserRepository';
import { UserService } from '../service/UserService';

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
    console.log(code);
    const statusValidate = await factory().validateUser(code);

    statusValidate === 200
      ? resp.status(statusValidate).json({ message: 'Login efetuado com sucesso!' })
      : resp.status(statusValidate).json({ message: 'Código inválido!' });
  }
}
