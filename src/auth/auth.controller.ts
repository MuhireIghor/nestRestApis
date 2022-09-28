import { Controller,Post,Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from 'src/users/dto/user.dto';
import { User } from 'src/users/interfaces/user.interface';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}
    @Post()
    login(@Body() userLog:UserDto ):Promise<User>{
        return this.authService.validateUser(userLog);

    }


}
