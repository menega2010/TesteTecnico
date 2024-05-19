import { TimeInterface } from "../entities/Time";


interface TimeRepositoryInterface {
  deleteTime({ id, userId, enterTime, exitTime }: TimeInterface): Promise<boolean>;
  addTime({ id, userId, enterTime, exitTime }: TimeInterface): Promise<boolean>;
  getAll(): Promise<TimeInterface[]>;
}

export { TimeRepositoryInterface };
