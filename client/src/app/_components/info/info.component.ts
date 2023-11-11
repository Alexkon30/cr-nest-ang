import { Component, OnInit } from '@angular/core';
import { Group, IStore, Source, User } from '@app/_models';
import { selectGroups } from '@app/_store/Groups/groups.selector';
import { selectTeachers } from '@app/_store/Users/users.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less']
})
export class InfoComponent implements OnInit {
  groups$: Observable<Group[]> = this.store.select(selectGroups);
  teachers$: Observable<User[]> = this.store.select(selectTeachers);

  selectedItem: Source = Source.GROUP
  groupId: number
  teacherId: number

  constructor(
    private store: Store<IStore>
  ) {
  }

  ngOnInit(): void {
  }

  selectItem(item: Source) {
    this.selectedItem = item
  }

  setTeachers() {
    this.selectedItem = Source.TEACHER
  }

  setGroups() {
    this.selectedItem = Source.GROUP
  }

}
