import prismaClient from '../../prisma/prismaClient';
import { UserRepositoryInterface } from '../interfaces/UserInterface/UserRepositoryInterface';

export class UserRepository implements UserRepositoryInterface {
  async validateUser(codeData: string): Promise<boolean> {
    try {
      const userValidate = await prismaClient.tab_user.findFirst({
        where: {
          code: codeData
        }
      });

      if (!userValidate) {
        return false;
      }

      return true;
    } catch (error) {
      throw new Error(`Error creating user: ${error}`);
    }
  }
}
