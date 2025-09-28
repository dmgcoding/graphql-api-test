import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserLoginInput } from './dto/user-login.input';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) { }

  @Mutation(() => String, { name: 'login' })
  login(@Args('loginInput') input: UserLoginInput) {
    return this.usersService.login(input);
  }
}
