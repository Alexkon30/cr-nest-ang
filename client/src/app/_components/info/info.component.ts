import { Component } from '@angular/core';
import { Group, IStore, Source, User } from '@app/_models';
import { selectGroupById, selectGroups } from '@app/_store/Groups/groups.selector';
import {
  selectTeachers,
  selectUserById,
} from '@app/_store/Users/users.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less'],
})
export class InfoComponent {
  groups$: Observable<Group[]> = this.store.select(selectGroups);
  teachers$: Observable<User[]> = this.store.select(selectTeachers);

  selectedItem: Source = Source.GROUP;
  groupId: number;
  teacherId: number;
  teacher: Observable<User>;
  group: Observable<Group>;

  constructor(private store: Store<IStore>) {}

  setTeachers() {
    this.selectedItem = Source.TEACHER;
  }

  setGroups() {
    this.selectedItem = Source.GROUP;
  }

  handleSelectTeacher() {
    // if (!this.teacherId) return
    this.teacher = this.store.select(selectUserById(this.teacherId));
  }

  handleSelectGroup() {
    this.group = this.store.select(selectGroupById(this.groupId))
  }
}
