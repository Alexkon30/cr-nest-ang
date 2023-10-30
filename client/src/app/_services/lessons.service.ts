import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lesson } from '@app/_models';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { ErrorService } from './error.service';
import { environment } from '@environments/environment';
import { catchError, Observable } from 'rxjs';

// export interface LessonsResult {
//   lessons: Lesson[];
// }

@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  getAllLessons(): Observable<Lesson[]> {
    return this.http
      .get<Lesson[]>(`${environment.apiUrl}/lessons/all`)
      .pipe(catchError(this.errorService.handleError));
  }

  // private lessonsQuery: QueryRef<LessonsResult, {}>;

  // constructor(private apollo: Apollo) {
  //   this.lessonsQuery = this.apollo.watchQuery({
  //     query: gql`
  //       query lessons($dateStart: String!, $dateEnd: String!) {
  //         lessons(dateStart: $dateStart, dateEnd: $dateEnd) {
  //           id
  //           theme
  //           groups {
  //             title
  //           }
  //           teachers {
  //             firstName
  //             lastName
  //           }
  //           discipline
  //           room
  //           dateStart
  //           dateEnd
  //           type
  //         }
  //       }
  //     `,
  //   });
  // }

  // async getLessons(dateStart: string, dateEnd: string): Promise<Lesson[]> {
  //   const result = await this.lessonsQuery.refetch({dateStart, dateEnd})
  //   return result.data.lessons
  // }

  // loadLessons(start: string, end: string) {
  //   this.apollo.query<{lessons: Lesson[]}>({
  //     query: GET_ALL_LESSONS,
  //     variables: {
  //       dateStart: start,
  //       dateEnd: end
  //     }
  //   }).subscribe(data => {
  //     this.lessonsSubject.next(JSON.parse(JSON.stringify(data.data.lessons)))
  //   })
  // }
}
