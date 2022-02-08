import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

  async getUserById(id: number): Promise<any> {
    return {
      id: id,
      name: "User name",
      email: "user.name@mail.com"
    }
  }
}
