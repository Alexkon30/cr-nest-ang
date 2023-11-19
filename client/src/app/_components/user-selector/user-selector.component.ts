import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IStore, Role, User } from '@app/_models';
import {
  selectUserByUrl,
  selectUsersByRole,
} from '@app/_store/Users/users.selector';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-selector',
  templateUrl: './user-selector.component.html',
  styleUrl: './user-selector.component.less',
})
export class UserSelectorComponent {
  teachers$: Observable<User[]> = this.store.select(
    selectUsersByRole(Role.TEACHER)
  );
  userId: number;
  subscribtion: Subscription;
  constructor(private store: Store<IStore>) {}

  ngOnInit() {
    this.subscribtion = this.store.select(selectUserByUrl).subscribe((data) => {
      // console.log(data)
      data && (this.userId = data.id);
    });
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
