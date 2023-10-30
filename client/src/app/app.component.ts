import { Component, OnInit } from '@angular/core';
import { GroupsService, LessonsService, UsersService } from './_services';
import { Store } from '@ngrx/store';
import { LessonsApiActions } from './_store/Lessons/lessons.actions';
import { GroupsApiActions } from './_store/Groups/groups.actions';
import { UsersApiActions } from './_store/Users/users.actions';
import { RoomsService } from './_services/rooms.service';
import { RoomsApiActions } from './_store/Rooms/rooms.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(
    private lessonsService: LessonsService,
    private groupsService: GroupsService,
    private usersService: UsersService,
    private roomsService: RoomsService,
    private lessonsStore: Store,
    private groupsStore: Store,
    private usersStore: Store,
    private roomsStore: Store
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.lessonsService.getAllLessons().subscribe(lessons => {
      this.lessonsStore.dispatch(LessonsApiActions.retrievedLessonsList({lessons}))
    })

    this.groupsService.getAllGroups().subscribe(groups => {
      this.groupsStore.dispatch(GroupsApiActions.retrievedGroupsList({groups}))
    })

    this.usersService.getAllUsers().subscribe(users => {
      this.usersStore.dispatch(UsersApiActions.retrievedUsersList({users}))
    })

    this.roomsService.getAllRooms().subscribe(rooms => {
      this.roomsStore.dispatch(RoomsApiActions.retrievedRoomsList({rooms}))
    })
  }


}
