import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LessonsApiActions } from './_store/Lessons/lessons.actions';
import { GroupsApiActions } from './_store/Groups/groups.actions';
import { UsersApiActions } from './_store/Users/users.actions';
import { RoomsApiActions } from './_store/Rooms/rooms.actions';
import { IStore } from './_models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(
    private store: Store<IStore>,
  ) {}

  async ngOnInit() {
    this.store.dispatch(LessonsApiActions.loadLessons());
    this.store.dispatch(GroupsApiActions.loadGroups());
    this.store.dispatch(UsersApiActions.loadUsers());
    this.store.dispatch(RoomsApiActions.loadRooms());
  }
}
