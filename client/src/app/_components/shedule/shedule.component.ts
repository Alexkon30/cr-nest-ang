import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.less']
})
export class SheduleComponent implements OnInit {
  selectedValue: string;

  constructor() { }

  ngOnInit(): void {
  }

}
