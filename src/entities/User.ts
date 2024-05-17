import { randomUUID } from "crypto";

class User {
  public id!: string;
  public name!: string;
  public lastName!: string;
  public code!: string;
  public phone!: string;
  public created_at!: Date;
  public updated_at!: Date;

  constructor(){
    if(!this.id) {
      this.id = randomUUID();
    }
  }

}

export {User};