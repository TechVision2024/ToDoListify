import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayloadInterface } from "./interfaces";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor( 
        // TODO: Add User Repository after create the user entity.
        @Inject(ConfigService) configService: ConfigService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>('TODOLISTIFY_JWT_SECRET')
        })
    }

    /**
     * Check if user valid by searching in the database.
     * @param payload the decoded JWT.
     * @throws UnauthorizedException if user is not found in the database.
     * @returns Promise of UserEntity
     */
    async validate( payload: JwtPayloadInterface ) {
        // TODO: Add the logic after create the user entity.
        /*
            Finding the user in the database, if user not found 
            this means that the user is not registered, and the 
            JWT is invalid.
        */
    }
}