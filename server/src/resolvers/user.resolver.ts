import { Query, Resolver } from "@nestjs/graphql";
import { User } from "src/entities";
import { v4 as uuidv4 } from "uuid";

@Resolver('User')
export class UserResolver {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {
        
    }

    @Query()
    async hello(): Promise<string> {
        return 'world'
    }
}