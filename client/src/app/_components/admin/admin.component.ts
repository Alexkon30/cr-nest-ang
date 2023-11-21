import { Component } from '@angular/core';
import { Group, IStore, Role, User, UserMode } from '@app/_models';
import { selectAllGroups } from '@app/_store/Groups/groups.selector';
import { selectUsersByRole } from '@app/_store/Users/users.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.less'
})
export class AdminComponent {
  userType: Omit<Role, 'OWNER' | 'ADMIN'>
  groups$: Observable<Group[]> = this.store.select(selectAllGroups);
  teachers$: Observable<User[]> = this.store.select(selectUsersByRole(Role.TEACHER));
  students$: Observable<User[]> = this.store.select(selectUsersByRole(Role.STUDENT));
  userMode: UserMode = 'teacher'

  constructor(
    private store: Store<IStore>
  ) {
  }

  changeUserMode(mode: UserMode) {
    this.userMode = mode
  }
}
