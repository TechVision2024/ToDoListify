import { ConfigModuleOptions } from "@nestjs/config";

/**
 * Uses to setup the ConfigModule.
 */
export const envConfig: ConfigModuleOptions = {
    isGlobal: true
}