import { TimeInterface } from '../../../../interfaces/TimeInterface/TimeInterface';
import { TimeRepositoryInterface } from '../../../../interfaces/TimeInterface/TimeRepositoryInterface';
import { TimeServiceInterface } from '../../../../interfaces/TimeInterface/TimeServiceInterface';

export class TimeService implements TimeServiceInterface {
  constructor(private readonly timeRepository: TimeRepositoryInterface) {}
  async deleteTime({ id, userId, enterTime, exitTime }: TimeInterface): Promise<boolean> {
    const dataTime: TimeInterface = {
      id,
      userId,
      enterTime,
      exitTime
    };
    return await this.timeRepository
      .deleteTime(dataTime)
      .then(() => {
        return true;
      })
      .catch((erro) => {
        throw new Error(`Erro delete time: ${erro}`);
      });
  }
  async addTime({ id, userId, enterTime, exitTime }: TimeInterface): Promise<boolean> {
    const dataTime: TimeInterface = {
      id,
      userId,
      enterTime,
      exitTime
    };
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
    return await this.timeRepository.getAll();
  }
}
