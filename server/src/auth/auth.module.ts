import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { ACCESS_TOKEN_SECRET } from "src/environments";
import { UserModule } from "../modules/user.module";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { LocalStrategy } from "./local.strategy";

@Module({
    imports: [
        JwtModule.register({
            secret: ACCESS_TOKEN_SECRET,
            signOptions: { expiresIn: '60s'}
        }),
        UserModule,
        PassportModule
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService]
})
export class AuthModule {}