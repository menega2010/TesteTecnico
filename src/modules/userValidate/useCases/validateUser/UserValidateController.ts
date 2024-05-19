import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ValidateUserUseCase } from './ValidateUserUseCase';

export class UserValidateController {

  async post(req: Request, resp: Response) {
    const { code } = req.body;
    const registerUseCase = container.resolve(ValidateUserUseCase);

    const statusValidate = await registerUseCase.validateUser(code);

    !statusValidate
      ? resp.status(400).json({ message: 'Código inválido!' })
      : resp.status(200).json({ message: 'Login efetuado com sucesso!' })
  }
}
