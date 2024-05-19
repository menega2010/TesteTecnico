import { inject, injectable } from 'tsyringe';
import { TimeInterface } from '../../infra/entities/Time';
import { TimeRepositoryInterface } from '../../infra/repositories/TimeRepositoryInterface';


@injectable()
export class GetTimeUseCase {
  constructor(
    @inject('TimeRepository') 
    private readonly timeRepository: TimeRepositoryInterface 
  ) {}

  async getTime(): Promise<TimeInterface[]> {
    const dataRet: TimeInterface[] = await this.timeRepository.getAll()
    return dataRet
  }

}

