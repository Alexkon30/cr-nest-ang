import { Component } from '@angular/core';
import { IStore, User } from '@app/_models';
import { selectUserByUrl } from '@app/_store/Users/users.selector';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: '[app-user-info]',
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.less'
})
export class UserInfoComponent {
  user: User
  subscribtion: Subscription
  constructor(private store: Store<IStore>) {
  }

  ngOnInit() {
    this.subscribtion = this.store.select(selectUserByUrl).subscribe(data => {
      this.user = data
    })
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe()
  }

  get userRoles() {
    return this.user.roles.map(role => role.value).join(', ')
  }
}
