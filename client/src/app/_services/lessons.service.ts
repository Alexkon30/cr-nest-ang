import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lesson, Source } from '@app/_models';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { ErrorService } from './error.service';
import { environment } from '@environments/environment';
import { catchError, Observable } from 'rxjs';

export interface LessonsResult {
  findLessons: Lesson[];
}

@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  private lessonsQuery: QueryRef<LessonsResult, {}>;

  constructor(private apollo: Apollo, private http: HttpClient, private errorService: ErrorService) {
    this.lessonsQuery = this.apollo.watchQuery({
      query: gql`
        query findLessons($dateStart: String!, $dateEnd: String!, $source: Source!, $id: Int!) {
          findLessons(dateStart: $dateStart, dateEnd: $dateEnd, source: $source, id: $id) {
            id
            theme
            groups {
              title
            }
            teachers {
              firstName
              lastName
            }
            discipline
            room {
              number
            }
            dateStart
            dateEnd
            type
          }
        }
      `,
    });
  }

  async getLessonsByFilter(dateStart: string, dateEnd: string, source: Source, id: number): Promise<Lesson[]> {
    const result = await this.lessonsQuery.refetch({dateStart, dateEnd, source, id})
    return result.data.findLessons
  }

  getAllLessons(): Observable<Lesson[]> {
    return this.http
      .get<Lesson[]>(`${environment.apiUrl}/lessons/all`)
      .pipe(catchError(this.errorService.handleError));
  }
}
