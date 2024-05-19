import { inject, injectable } from 'tsyringe';

import { UserRepositoryInterface } from '../../infra/repositories/UserRepositoryInterface';

@injectable()
export class ValidateUserUseCase {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: UserRepositoryInterface 
  ) {}

  async validateUser(code: string): Promise<boolean> {
    return await this.userRepository.validateUser(code);
  }
}
