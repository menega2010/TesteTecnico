import prismaClient from '../../../../shared/infra/prisma/prismaClient';
import { UserInterface } from '../entities/User';
import { UserRepositoryInterface } from './UserRepositoryInterface';

export class UserRepository implements UserRepositoryInterface {
  async validateUser(codeData: string): Promise<boolean> {
    try {
      const userValidate = await prismaClient.tab_user.findFirst({
        where: {
          code: codeData
        }
      });

      if (userValidate === null) {
        return false;
      }

      return true;
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`Error validate user: ${error}`);
    }
  }

  async getAll(): Promise<UserInterface[]> {
    return prismaClient.tab_user
      .findMany()
      .then((consultingTime: UserInterface[]) => {
        return consultingTime;
      })
      .catch((error) => {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw new Error(`Error fetching consulting time: ${error}`);
      });
  }
}
