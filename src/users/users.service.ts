import { Injectable,Res } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import { ReceivedUser } from './users.controller';
import {Response } from 'express';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel:Model<User> ){        
    }
    
    async createUser(user:User):Promise<ReceivedUser>{
        const salt = await bcrypt.genSalt(10);
        const hashedPwd = await bcrypt.hash(user.password,salt);
        const details =  await this.userModel.create({
            name:user.name,
            email:user.email,
            password:hashedPwd
        })
        const {_id,...others} = details.toObject();        
        console.log(_id);
        return others;
        
    }
    
async updateUser(id:string,user:User):Promise<User>{
    return await this.userModel.findByIdAndUpdate(id,user,{new:true});
}

async deleteUser(id:string):Promise<User>{
    return await this.userModel.findByIdAndRemove(id);
}
async findUser(user:User,@Res() res?:Response ):Promise<User>{
    const findUser = await this.userModel.findOne({name:user.name});
    if(findUser){
        return findUser;
    }else{
        res.json({message:"An error occured"})
    }
        
    }
    async getAll():Promise<User[]>{
        return this.userModel.find();
    }
}

