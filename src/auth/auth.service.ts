import { Injectable } from '@nestjs/common';
import { User } from 'src/users/interfaces/user.interface';
import UsersModel from '../users/schemas/user.schema'
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) { }
    async validateUser(user: User): Promise<User> {
        if (!user.name || !user.password) {
            console.log('User name and password are required please!!');
        }
        const findUser = await this.userService.findUser(user);

        return findUser;

    }
    async login(user:User):Promise<User>{
        const foundUser= await this.userService.findUser(user);
        const payload = {username:user.name,email:user.email}
    }
}


