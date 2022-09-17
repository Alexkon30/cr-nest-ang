import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { ACCESS_TOKEN_SECRET } from "src/environments";
import { UserModule } from "../modules/users/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { LocalStrategy } from "./strategies/local.strategy";


@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: ACCESS_TOKEN_SECRET,
            signOptions: { expiresIn: '600s'}
        })
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    controllers: [AuthController],
    exports: [AuthService]
})
export class AuthModule {}