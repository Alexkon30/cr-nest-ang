import { Component, OnInit } from '@angular/core';
import { Shedule } from '@app/_models';
import { SheduleService } from '@app/_services';
import { Apollo } from 'apollo-angular';
import moment from 'moment';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.less'],
})
export class SheduleComponent implements OnInit {
  shedule: Shedule;
  subscription: Subscription;
  date: object;
  source: string;

  constructor(private apollo: Apollo, private sheduleService: SheduleService) {}

  ngOnInit(): void {
    this.subscription = this.sheduleService.shedule
    .subscribe(shedule => {
      this.shedule = shedule
    })

    this.date = new Date();
    this.source = 'groups';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  //mock data for test
  set() {
    this.sheduleService.createSheduleFromLessons([
      {
        id: 1,
        teachers: [],
        groups: [],
        discipline: 'discipline 1',
        theme: 'theme 1',
        room: 213,
        dateStart: '2022-10-31T15:00',
        dateEnd: '2022-10-31T16:30',
        type: 'lecture',
      },
      {
        id: 2,
        teachers: [],
        groups: [],
        discipline: 'discipline 2',
        theme: 'theme 2',
        room: 213,
        dateStart: '2022-10-31T16:30',
        dateEnd: '2022-10-31T19:00',
        type: 'lecture',
      },
      {
        id: 3,
        teachers: [],
        groups: [],
        discipline: 'discipline 3',
        theme: 'theme 3',
        room: 213,
        dateStart: '2022-10-31T09:00',
        dateEnd: '2022-10-31T10:30',
        type: 'lecture',
      },
    ]);
  }

  show() {
    console.log(moment(this.date).day(1).format('DD.MM.YYYY'), moment(this.date).day(7).format('DD.MM.YYYY'))

    // moment(this.date).day(7).format('DD.MM.YYYYTHH:mm')
  }
}
