import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import { ReceivedUser } from './users.controller';


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
        return others;
    }
    
async updateUser(id:string,user:User):Promise<User>{
    return await this.userModel.findByIdAndUpdate(id,user,{new:true});
}

async deleteUser(id:string):Promise<User>{
    return await this.userModel.findByIdAndRemove(id);
}
}
