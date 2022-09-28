import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import userSchema from 'src/users/schemas/user.schema';
import { AuthService } from './auth.service';

@Module({
    imports:[UsersModule,MongooseModule.forFeature([{name:'User',schema:userSchema}])],
    controllers: [AuthController],
    providers:[AuthService]
})
export class AuthModule {}
