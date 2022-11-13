import { Injectable } from '@angular/core';
import { Lesson, Shedule } from '@app/_models';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import moment from 'moment';
import { Apollo } from 'apollo-angular';
import { GET_ALL_LESSONS } from '@app/graphql/graphql.queries';

@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  private lessonsSubject: BehaviorSubject<Lesson[]>;
  public lessons: Observable<Lesson[]>;

  constructor(private apollo: Apollo) {
    this.lessonsSubject = new BehaviorSubject<Lesson[]>([]);
    this.lessons = this.lessonsSubject.asObservable();
  }

  public get lessonsValue(): Lesson[] {
    return this.lessonsSubject.getValue();
  }

  clear() {
    this.lessonsSubject.next([]);
  }
 
  setLessons(lessons: Lesson[]) {
    this.lessonsSubject.next(lessons);
  }

  loadLessons(start: string, end: string) {
    this.apollo.query<{lessons: Lesson[]}>({
      query: GET_ALL_LESSONS,
      variables: {
        dateStart: start,
        dateEnd: end
      }
    }).subscribe(data => {
      this.lessonsSubject.next(JSON.parse(JSON.stringify(data.data.lessons)))
    })
  }
}
