import { UserServiceInterface } from '../interfaces/UserInterface/UserServiceInterface';

export class ValidateUserCase {
  constructor(private readonly userService: UserServiceInterface) {}

  async validateUser(codeData: string) {
    const validate = await this.userService.validateUser(codeData);
    if (validate === false) {
      return 400;
    } else {
      return 200;
    }
  }
}
