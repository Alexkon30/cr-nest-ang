import { Injectable } from '@angular/core';
import { Lesson, Shedule } from '@app/_models';
import { BehaviorSubject, Observable } from 'rxjs';
import moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  private lessonsSubject: BehaviorSubject<Lesson[]>;
  public lessons: Observable<Lesson[]>;

  constructor() {
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
}
