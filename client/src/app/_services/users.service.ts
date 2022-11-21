import { Injectable } from "@angular/core";
import { User } from "@app/_models";
import { Apollo, gql, QueryRef } from "apollo-angular";

export enum RoleEnum {
    TEACHER = "TEACHER",
    STUDENT = "STUDENT",
    ADMIN = "ADMIN"
}

export interface UsersResult {
  users: User[]
}

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    private usersQuery: QueryRef<UsersResult, {role: RoleEnum}>

    constructor(private apollo: Apollo) {
        this.usersQuery = this.apollo.watchQuery({
            query: gql`
            query users($role: RoleEnum) {
              users(role: $role) {
                id
                firstName
                lastName
              }
            }
          `
        })
    }

    async getUsersByRole(role?: RoleEnum): Promise<User[]> {
        const result = await this.usersQuery.refetch({role})
        return result.data.users
    }
}