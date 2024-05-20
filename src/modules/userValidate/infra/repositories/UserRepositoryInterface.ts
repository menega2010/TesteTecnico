import { UserInterface } from '../entities/User';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface UserRepositoryInterface {
  validateUser(codeData: string): Promise<boolean>;
  getAll(): Promise<UserInterface[]>;
}

export { UserRepositoryInterface };
