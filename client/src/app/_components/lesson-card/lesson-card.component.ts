import { Component, Input, OnInit } from '@angular/core';
import { Lesson } from '@app/_models';
import moment from 'moment';

@Component({
  selector: 'app-lesson-card',
  templateUrl: './lesson-card.component.html',
  styleUrls: ['./lesson-card.component.less']
})
export class LessonCardComponent implements OnInit {

  gap: number;
  height: number;
  url: string;

  @Input() lesson: Lesson

  constructor() { }

  ngOnInit(): void {
    this.gap = moment(+this.lesson.dateStart).diff(moment(+this.lesson.previousLessonEnd), 'm')
    this.height = moment(+this.lesson.dateEnd).diff(moment(+this.lesson.dateStart), 'm')
    this.url = '/lesson/' + this.lesson.id
  }

}
