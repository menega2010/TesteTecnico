import { v4 as uuid } from 'uuid';
export interface TimeInterface {
  id?: string;
  userId: string;
  enterTime: string;
  exitTime: string;
  updatedAt?: string | null;
}

export class Time {
  public id!: string;
  public userId!: string;
  public enterTime?: string;
  public exitTime?: string;
  public updatedAt!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}


