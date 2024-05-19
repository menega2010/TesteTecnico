import { inject, injectable } from 'tsyringe';
import { TimeInterface } from '../../infra/entities/Time';
import { TimeRepositoryInterface } from '../../infra/repositories/TimeRepositoryInterface';


@injectable()
export class DeleteTimeUseCase {
  constructor(
    @inject('TimeRepository')
    private readonly timeRepository: TimeRepositoryInterface 
  ) {}

  async deleteTime({id,
    userId,
    enterTime,
    exitTime
    }: TimeInterface): Promise<number> {
    const deleteTimeData: TimeInterface = {id,
      userId,
      enterTime,
      exitTime}
     await this.timeRepository.deleteTime(deleteTimeData)
     return await this.timeRepository
     .deleteTime(deleteTimeData)
     .then(() => {
       return 200;
     })
     .catch(() => {
       return 400;
     });
  }

}
