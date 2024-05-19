import { TimeInterface } from './TimeInterface';

interface TimeRepositoryInterface {
  deleteTime({ id, userId, enterTime, exitTime }: TimeInterface): Promise<boolean>;
  addTime({ id, userId, enterTime, exitTime }: TimeInterface): Promise<boolean>;
  getAll(): Promise<TimeInterface[]>;
}

export { TimeRepositoryInterface };
