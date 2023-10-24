import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "@app/_models";
// import { Apollo, gql, QueryRef } from "apollo-angular";
import { BehaviorSubject, Observable, catchError, map, throwError } from "rxjs";
import { environment } from '@environments/environment';


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

  constructor(
    private http: HttpClient
  ) {
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/users/all`)
    .pipe(catchError(this.handleError))
      // .pipe(map(data => {
      //   console.log(data)
      //   this.usersSubject.next(data)
      // }))
  }

   // Error handling
   handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

    // private usersQuery: QueryRef<UsersResult, {role: RoleEnum}>

    // constructor(private apollo: Apollo) {
    //     this.usersQuery = this.apollo.watchQuery({
    //         query: gql`
    //         query users($role: RoleEnum) {
    //           users(role: $role) {
    //             id
    //             firstName
    //             lastName
    //           }
    //         }
    //       `
    //     })
    // }

    // async getUsersByRole(role?: RoleEnum): Promise<User[]> {
    //     const result = await this.usersQuery.refetch({role})
    //     return result.data.users
    // }
}