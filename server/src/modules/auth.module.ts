import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "src/services/auth.service";
import { UserModule } from "./user.module";

@Module({
    imports: [
        JwtModule.register({
            secret: 'secret',
        }),
        UserModule
    ],
    controllers: [],
    providers: [AuthService],
    exports: [AuthService]
})
export class AuthModule {}