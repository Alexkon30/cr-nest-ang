import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Get('all')
    async getAllUsers() {
        return this.userService.findAllUsers()
    }
}