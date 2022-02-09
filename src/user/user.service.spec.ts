import { Test, TestingModule } from '@nestjs/testing';
import { identity } from 'rxjs';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a user', async () => {
    const id = 12;

    const user = await service.getUserById(id);

    expect(id).toBe(user.id);
  })

  it('should create a new user', async () => {
    const newUser = {
      email: 'email.mail.com',
      name: 'New User Name'
    }

    const createdUser = await service.createUser(newUser);

    expect(createdUser.id).toBeDefined();
    expect(createdUser.email).toBeDefined();
    expect(createdUser.name).toBeDefined();
  });
});
