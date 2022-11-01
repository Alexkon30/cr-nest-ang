import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruler',
  templateUrl: './ruler.component.html',
  styleUrls: ['./ruler.component.less']
})
export class RulerComponent implements OnInit {
  hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

  constructor() { }

  ngOnInit(): void {
  }

}
