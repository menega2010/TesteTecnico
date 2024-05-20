import { TimeInterface } from '../entities/Time';
import { TimeRepositoryInterface } from '../repositories/TimeRepositoryInterface';
import { TimeServiceInterface } from './TimeServiceInterface';

export class TimeService implements TimeServiceInterface {
  constructor(private readonly timeRepository: TimeRepositoryInterface) {}
  async deleteTime({ id, userId, enterTime, exitTime }: TimeInterface): Promise<boolean> {
    const dataTime: TimeInterface = {
      id,
      userId,
      enterTime,
      exitTime
    };
    // eslint-disable-next-line no-return-await
    return await this.timeRepository
      .deleteTime(dataTime)
      .then(() => {
        return true;
      })
      .catch((erro) => {
        throw new Error(`Erro delete time: ${erro}`);
      });
  }
  async addTime({ userId, enterTime, exitTime }: TimeInterface): Promise<boolean> {
    const dataTime: TimeInterface = {
      userId,
      enterTime,
      exitTime
    };
    // eslint-disable-next-line no-return-await
    return await this.timeRepository
      .addTime(dataTime)
      .then(() => {
        return true;
      })
      .catch((erro) => {
        throw new Error(`Erro add time: ${erro}`);
      });
  }
  async getAll(): Promise<TimeInterface[]> {
    // eslint-disable-next-line no-return-await
    return await this.timeRepository.getAll();
  }
}
