import { TimeInterface } from '../../../interfaces/TimeInterface/TimeInterface';
import { TimeServiceInterface } from '../../../interfaces/TimeInterface/TimeServiceInterface';

export class ValidateTimeCase {
  constructor(private readonly timeService: TimeServiceInterface) {}

  async addTime({ id, userId, enterTime, exitTime }: TimeInterface) {
    const dataTime: TimeInterface = {
      id,
      userId,
      enterTime,
      exitTime
    };
    return await this.timeService
      .addTime(dataTime)
      .then(() => {
        return 200;
      })
      .catch(() => {
        return 400;
      });
  }

  async deleteTime({ id, userId, enterTime, exitTime }: TimeInterface) {
    const dataTime: TimeInterface = {
      id,
      userId,
      enterTime,
      exitTime
    };
    return await this.timeService
      .deleteTime(dataTime)
      .then(() => {
        return 200;
      })
      .catch(() => {
        return 400;
      });
  }

  async getAll(): Promise<TimeInterface[]> {
    return await this.timeService.getAll();
  }
}
