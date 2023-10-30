import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Group } from '@app/_models';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { ErrorService } from './error.service';
import { environment } from '@environments/environment';
import { catchError, Observable } from 'rxjs';

export interface GroupsResult {
  groups: Group[];
}

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  getAllGroups(): Observable<Group[]> {
    return this.http
      .get<Group[]>(`${environment.apiUrl}/groups/all`)
      .pipe(catchError(this.errorService.handleError));
  }

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
