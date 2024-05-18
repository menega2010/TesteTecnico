import { Request, Response } from 'express';
import { ValidateUserCase } from '../../useCases/validateUserCase';

export class UserController {
  constructor(private readonly useCase: ValidateUserCase) {}

  async post(req: Request, resp: Response): Promise<Response> {
    const { code } = req.body;
    await this.useCase.validateUser(code);
    return resp.status(200).json({ message: 'Login efetuado com sucesso!' });
  }
}
