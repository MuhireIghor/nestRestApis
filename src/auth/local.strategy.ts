import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { User } from "src/users/interfaces/user.interface";
import { UnauthorizedException } from "@nestjs/common/exceptions";

export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private readonly authServie:AuthService){
        super();
    }
    async validateUser(user:User):Promise<User>{
        const user2 = await this.authServie.validateUser(user);
        if(!user2){
           throw new UnauthorizedException();
        }
return user2;
    }


}