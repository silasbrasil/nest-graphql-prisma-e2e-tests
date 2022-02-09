import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UserService {

  async getUserById(id: number): Promise<any> {
    return {
      id: id,
      name: "User name",
      email: "user.name@mail.com"
    }
  }

  async createUser(createUserDto: CreateUserDto): Promise<any> {
    return { ...createUserDto, id: 1, };
  }
}
