import { Controller,Param,Body,Post,Get,Put,Delete,Req,Res } from '@nestjs/common';
import { identity } from 'rxjs';
import { UserDto } from './dto/user.dto';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';
import {Response,Request} from 'express';
 export interface ReceivedUser{
    name:string;
    email:string
}


@Controller('users')
export class UsersController {
constructor( private readonly usersService:UsersService ){}
@Post()
createUser(@Body() usersDto:UserDto):Promise<ReceivedUser>{
    return this.usersService.createUser(usersDto);
}
@Put(':id')
updateUser(@Param('id') id,@Body() updateDto:UserDto):Promise<User>{
    return this.usersService.updateUser(id,updateDto)

}
@Delete(':id')
async deleteUser(@Param('id') id,@Res() res:Response):Promise<User>{
    const userrecipe = this.usersService.deleteUser(id);
    res.json({message:`user with name ${(await userrecipe).name} has been deleted successfully!`})
    return this.usersService.deleteUser(id);

}
@Get()
getAllUsers(){
    return this.usersService.getAll();
}

}
