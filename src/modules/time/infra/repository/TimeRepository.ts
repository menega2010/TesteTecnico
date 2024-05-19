import { v4 as uuidv4 } from 'uuid';
import prismaClient from '../../../../../prisma/prismaClient';
import { TimeInterface } from '../../../../interfaces/TimeInterface/TimeInterface';
import { TimeRepositoryInterface } from '../../../../interfaces/TimeInterface/TimeRepositoryInterface';

export class TimeRepository implements TimeRepositoryInterface {
  async getAll(): Promise<TimeInterface[]> {
    return prismaClient.tab_time
      .findMany()
      .then((consultingTime) => {
        return consultingTime;
      })
      .catch((error) => {
        throw new Error(`Error fetching consulting time: ${error}`);
      });
  }
  async addTime({ userId, enterTime, exitTime }: TimeInterface): Promise<boolean> {
    return await prismaClient.tab_time
      .create({
        data: {
          id: uuidv4(),
          userId: userId,
          enterTime: enterTime,
          exitTime: exitTime,
          updatedAt: Date.toString()
        }
      })
      .then(() => {
        return true;
      })
      .catch((error) => {
        throw new Error(`Error add time: ${error}`);
      });
  }

  async deleteTime({ id, userId, enterTime, exitTime }: TimeInterface): Promise<boolean> {
    return await prismaClient.tab_time
      .delete({
        where: {
          id: id,
          userId: userId,
          enterTime: enterTime,
          exitTime: exitTime
        }
      })
      .then(() => {
        return true;
      })
      .catch((error) => {
        throw new Error(`Error add time: ${error}`);
      });
  }
}
