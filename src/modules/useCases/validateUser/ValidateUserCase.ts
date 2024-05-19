import { UserServiceInterface } from '../../../interfaces/UserInterface/UserServiceInterface';

export class ValidateUserCase {
  constructor(private readonly timeService: UserServiceInterface) {}

  async validateUser(codeData: string) {
    console.log(codeData);
    const validate = await this.timeService.validateUser(codeData);
    if (validate === false) {
      return 400;
    } else {
      return 200;
    }
  }
}
