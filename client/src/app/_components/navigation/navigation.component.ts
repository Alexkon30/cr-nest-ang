import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less'],
})
export class NavigationComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }
}
