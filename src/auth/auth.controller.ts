import { Controller,Post,Body,Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from 'src/users/dto/user.dto';
import { User } from 'src/users/interfaces/user.interface';
import { UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express'

@Controller('auth/login')
export class AuthController {
@UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Req() req:Request){
        return req.user;
    }
    }


}
