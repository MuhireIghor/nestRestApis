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
    async validateUser(name:string,password:String):Promise<User>{
        const findUser = await this.userModel.findOne({name:name});
console.log(findUser);
return findUser;

        }
    }


