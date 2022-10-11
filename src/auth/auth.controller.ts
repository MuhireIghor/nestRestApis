import { Controller, Post, Req, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from 'src/users/dto/user.dto';
import { User } from 'src/users/interfaces/user.interface';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './local.auth.guards';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Req() req: Request, @Body() userDto: UserDto): Promise<User | any> {
   
        return this.authService.validateUser(userDto)
    }
}



