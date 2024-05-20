import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ValidateUserUseCase } from './ValidateUserUseCase';

export class UserValidateController {
  async post(req: Request, resp: Response) {
    const { code } = req.body;
    const registerUseCase = container.resolve(ValidateUserUseCase);
    const dataCode: number = code;
    const statusValidate = await registerUseCase.validateUser(dataCode.toString());

    // eslint-disable-next-line no-unused-expressions
    !statusValidate
      ? resp.status(400).json({ message: 'Código inválido!' })
      : resp.status(200).json({ message: 'Login efetuado com sucesso!' });
  }

  async get(req: Request, resp: Response) {
    try {
      const registerUseCase = container.resolve(ValidateUserUseCase);
      const statusValidate = await registerUseCase.getTime();
      return resp.status(200).json(statusValidate);
    } catch (error) {
      console.error(`Error: ${error}`);
      return resp.status(500).json({ message: `Error: ${error}` });
    }
  }
}
