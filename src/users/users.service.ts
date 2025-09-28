import { BadRequestException, Injectable } from '@nestjs/common';
import { UserLoginInput } from './dto/user-login.input';

@Injectable()
export class UsersService {
    private username = 'user';
    private pwd = 'user';

    login(input: UserLoginInput): String {
        if (input.username === this.username && input.pwd === this.pwd) return 'token'
        throw new BadRequestException('wrong credentials')
    }
}
