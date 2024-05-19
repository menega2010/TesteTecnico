import prismaClient from "../../../../shared/infra/prisma/prismaClient";
import { UserRepositoryInterface } from "./UserRepositoryInterface";

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
      throw new Error(`Error validate user: ${error}`);
    }
  }
}
