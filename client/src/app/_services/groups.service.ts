import { Injectable } from "@angular/core";
import { Group } from "@app/_models";
import { Apollo, gql, QueryRef } from "apollo-angular";

export interface GroupsResult {
    groups: Group[]
}

@Injectable({
    providedIn: 'root'
})
export class GroupsService {
    // private groupsQuery: QueryRef<GroupsResult, {}>

    // constructor(private apollo: Apollo) {
    //     this.groupsQuery = this.apollo.watchQuery({
    //         query: gql`
    //         query {
    //             groups {
    //             id
    //             title
    //             students {
    //                 firstName
    //                 lastName
    //             }
    //           }
    //         }
    //       `
    //     })
    // }

    // async getGroups(): Promise<Group[]> {
    //     const result = await this.groupsQuery.refetch()
    //     return result.data.groups
    // }
}