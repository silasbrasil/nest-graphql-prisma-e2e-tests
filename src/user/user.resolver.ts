import { ValidationPipe } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private userService: UserService) { }

  @Query()
  async getUserById(@Args('id') id: number) {
    return this.userService.getUserById(+id);
  }

  @Mutation()
  async createUser(@Args('createUser', ValidationPipe) createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
