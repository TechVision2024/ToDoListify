import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayloadInterface } from "./interfaces";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/user/entities/user.entity";
import { Repository } from "typeorm";
import { UserState } from "src/user/enums/user-state.enum";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor( 
        @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
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
    async validate( payload: JwtPayloadInterface ): Promise<UserEntity> {
        const { username } = payload;
        const user = await this.userRepository.findOne({where: {username}});
        if ( !user || user['state'] == UserState.INACTIVE)
            throw new UnauthorizedException("User NOT found!");
        return user;
    }
}