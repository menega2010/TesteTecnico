import { inject, injectable } from 'tsyringe';
import { TimeInterface } from '../../infra/entities/Time';
import { TimeRepositoryInterface } from '../../infra/repositories/TimeRepositoryInterface';


@injectable()
export class PostTimeUseCase {
  constructor(
    @inject('TimeRepository')
    private readonly timeRepository: TimeRepositoryInterface 
  ) {}

  async addTime({ id, userId, enterTime, exitTime }: TimeInterface) {
    const dataTime: TimeInterface = {
      id,
      userId,
      enterTime,
      exitTime
    };
    return await this.timeRepository
      .addTime(dataTime)
      .then(() => {
        return 200;
      })
      .catch(() => {
        return 400;
      });
  }

}
