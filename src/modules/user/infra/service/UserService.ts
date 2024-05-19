import { UserRepositoryInterface } from '../../../../interfaces/UserInterface/UserRepositoryInterface';
import { UserServiceInterface } from '../../../../interfaces/UserInterface/UserServiceInterface';

export class UserService implements UserServiceInterface {
  constructor(private readonly userRepository: UserRepositoryInterface) {}

  async validateUser(codeData: string): Promise<boolean> {
    if (!codeData) {
      throw new Error('Code data is required!');
    }
    const validateDataUser = this.userRepository.validateUser(codeData);
    return validateDataUser;
  }
}
