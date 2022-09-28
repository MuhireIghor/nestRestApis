import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import userSchema from './schemas/user.schema';
import { User } from './interfaces/user.interface';
import { UsersController } from './users.controller';

@Module({
    imports:[MongooseModule.forFeature([{name:'User',schema:userSchema}])],
    providers:[UsersService],
    controllers: [UsersController],
    exports:[UsersService]
})
export class UsersModule {
   
}
