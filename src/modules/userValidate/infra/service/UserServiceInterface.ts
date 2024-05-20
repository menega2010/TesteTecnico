import { UserInterface } from '../entities/User';

interface UserServiceInterface {
  validateUser(code: string): Promise<boolean>;
  getAll(): Promise<UserInterface[]>;
}

export { UserServiceInterface };
