import { v4 as uuid } from 'uuid';

class Time {
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

export { Time };
