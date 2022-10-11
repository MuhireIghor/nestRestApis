import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/interfaces/user.interface';
import UsersModel from '../users/schemas/user.schema'
import { UsersService } from 'src/users/users.service';
import {JwtService } from '@nestjs/jwt'


@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService,private jwtTokenService:JwtService) { }
    async validateUser(user: User): Promise<User|any> {
        if (!user.name || !user.password) {
            console.log('User name and password are required please!!');
        }
        const findUser = await this.userService.findUser(user);
        const match  = await bcrypt.compare(user.password,findUser.password);
        if(match){
            const {password,...result} =user;
            const payload = {username:user.name,email:user.email};
            return{
                access_token:this.jwtTokenService.sign(payload)
            }
        }else{
            return null;
        }
    }
   
}


