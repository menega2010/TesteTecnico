import { inject, injectable } from 'tsyringe';

import { UserInterface } from '../../infra/entities/User';
import { UserRepositoryInterface } from '../../infra/repositories/UserRepositoryInterface';

@injectable()
export class ValidateUserUseCase {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: UserRepositoryInterface
  ) {}

  async validateUser(code: string): Promise<boolean> {
    // eslint-disable-next-line no-return-await
    return await this.userRepository.validateUser(code);
  }

  async getTime(): Promise<UserInterface[]> {
    const dataRet: UserInterface[] = await this.userRepository.getAll();
    return dataRet;
  }
}
