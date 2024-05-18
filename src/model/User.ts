import { v4 as uuid } from 'uuid';

class User {
  public id!: string;
  public name!: string;
  public lastName!: string;
  public code!: string;
  public phone!: string;
  public empresa!: string;
  public created_at!: string;
  public updated_at!: string;

  constructor(){
    if(!this.id) {
      this.id = uuid();
    }
  }

}

export { User };
