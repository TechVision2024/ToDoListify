import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
    imports: [
        TypeOrmModule.forFeature([]), // TODO: Add the user entity.
        AuthModule,
        ConfigModule
    ],
    providers: [JwtStrategy]
})
export class UserModule {}
