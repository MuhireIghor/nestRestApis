import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import  UsersModel from '../users/schemas/user.schema'
import userSchema from '../users/schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(@InjectModel('User') private readonly userModel:Model<User>,private userService2:UsersService){}
    async validateUser( user:User):Promise<User>{
        if(!user.name || !user.password){
            console.log('User name and password are required please!!');
            
        }
        const findUser = await this.userModel.findOne({name:user.name});

const match  = await bcrypt.compare(findUser.password,user.password);
console.log(match);
if(!match){
    return null;
}

return findUser;

        }
    }


