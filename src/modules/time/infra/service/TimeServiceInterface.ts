import { TimeInterface } from "../entities/Time";

export interface TimeServiceInterface {
  deleteTime({ id, userId, enterTime, exitTime }: TimeInterface): Promise<boolean>;
  addTime({ id, userId, enterTime, exitTime }: TimeInterface): Promise<boolean>;
  getAll(): Promise<TimeInterface[]>;
}
