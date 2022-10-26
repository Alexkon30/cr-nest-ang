import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {
  mode: string = 'login'

  constructor() { }

  ngOnInit(): void {
  }

  handleChangeMode(value: string) {
    this.mode = value
  }
}
