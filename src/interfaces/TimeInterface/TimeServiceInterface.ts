import { TimeInterface } from './TimeInterface';

interface TimeServiceInterface {
  deleteTime({ id, userId, enterTime, exitTime }: TimeInterface): Promise<boolean>;
  addTime({ id, userId, enterTime, exitTime }: TimeInterface): Promise<boolean>;
  getAll(): Promise<TimeInterface[]>;
}

export { TimeServiceInterface };
