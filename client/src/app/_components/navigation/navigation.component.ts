import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models';
import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less'],
})
export class NavigationComponent implements OnInit {
  user: User
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.user = this.authService.userValue
  }

  logout() {
    this.authService.logout();
  }

  get userName() {
    return `${this.user.firstName} ${this.user.lastName} (${this.user.email})`
  }
}
