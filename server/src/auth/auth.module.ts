import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { ACCESS_TOKEN_SECRET } from "src/environments";
import { UserModule } from "../modules/user.module";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { LocalStrategy } from "./strategies/local.strategy";


@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: ACCESS_TOKEN_SECRET,
            signOptions: { expiresIn: '60s'}
        })
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService]
})
export class AuthModule {}