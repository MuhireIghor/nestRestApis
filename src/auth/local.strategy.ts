import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { User } from "src/users/interfaces/user.interface";
import { UnauthorizedException } from "@nestjs/common/exceptions";

export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authServie: AuthService) {
        super();
    }
    async validate(user2: User): Promise<User> {
        const user = await this.authServie.validateUser(user2);
        if (!user) {
            console.log('Error occured');

            throw new UnauthorizedException();
        }
        return user;
    }


}