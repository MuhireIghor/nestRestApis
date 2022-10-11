import { Module,RequestMethod } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import {NestModule,MiddlewareConsumer} from '@nestjs/common';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import userSchema from 'src/users/schemas/user.schema';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { use } from 'passport';
import { AuthMiddleware } from './auth.middleware';
import { JwtModule } from '@nestjs/jwt';
import {jwtConstatnts} from '../constants';
@Module({
    imports:[UsersModule,PassportModule,JwtModule.register({
        secret:jwtConstatnts.secret,
        signOptions:{expiresIn:'60s'}
    })],
    controllers: [AuthController],
    providers:[AuthService]
})
export class AuthModule  implements NestModule  {
    configure(consumer: MiddlewareConsumer) {
        (
            consumer.apply(AuthMiddleware).forRoutes({path:'auth',method:RequestMethod.ALL})
        )
    }
}
