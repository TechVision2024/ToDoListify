import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";

/**
 * Uses to setup the TypeOrmModule.
 */
export const typeormConfig: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>("TODOLISTIFY_DATABASE_HOST"),
        port: Number.parseInt(configService.get<string>("TODOLISTIFY_DATABASE_PORT")),
        username: configService.get<string>("TODOLISTIFY_DATABASE_USERNAME"),
        password: configService.get<string>("TODOLISTIFY_DATABASE_PASSWORD"),
        database: configService.get<string>("TODOLISTIFY_DATABASE_NAME"),
        entities: [],
        synchronize: configService.get<string>("TODOLISTIFY_DATABASE_SYNC") === "true"
    })
}