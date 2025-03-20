import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModuleAsyncOptions } from "@nestjs/jwt";

/**
 * Uses to setup the JwtModule.
 */
export const jwtConfig: JwtModuleAsyncOptions = {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>("TODOLISTIFY_JWT_SECRET"),
        signOptions: {
            expiresIn: configService.get<string>('TODOLISTIFY_JWT_EXPIRESIN')
        }
    })
}