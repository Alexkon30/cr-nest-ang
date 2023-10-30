import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@app/_models';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Observable, catchError } from 'rxjs';
import { environment } from '@environments/environment';
import { ErrorService } from './error.service';

export enum RoleEnum {
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT',
  ADMIN = 'ADMIN',
}

export interface UsersResult {
  users: User[];
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private usersQuery: QueryRef<UsersResult, { role: RoleEnum }>;

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
    private apollo: Apollo
  ) {
    this.usersQuery = this.apollo.watchQuery({
      query: gql`
        query users($role: RoleEnum) {
          users(role: $role) {
            id
            firstName
            lastName
            orgUserRoles {
              roles {
                value
              }
            }
          }
        }
      `,
    });
  }

  getAllUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(`${environment.apiUrl}/users/all`)
      .pipe(catchError(this.errorService.handleError));
  }

  async getUsersByRole(role?: RoleEnum): Promise<User[]> {
    const result = await this.usersQuery.refetch({ role });
    console.log(result.data.users)
    return result.data.users;
  }
}
