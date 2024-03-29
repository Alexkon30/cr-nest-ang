import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';

import { ErrorInterceptor, JwtInterceptor } from '@app/_helpers';
import { AppRoutingModule } from '@app/app-routing.module';

import { AppComponent } from '@app/app.component';
import {
  ProfileComponent,
  HomeComponent,
  SheduleComponent,
  StatsComponent,
  LessonComponent,
  ResultsComponent,
  NavigationComponent,
  PagenotfoundComponent,
  FooterComponent,
  AuthComponent,
  LoginComponent,
  RegisterComponent,
  RulerComponent,
  LessonCardComponent,
  GroupSelectorComponent,
  UserSelectorComponent,
  GroupInfoComponent,
  UserInfoComponent,
  AdminComponent
} from '@app/_components';
import {
  AddPreviousLessonEndPipe,
  SortByTimePipe,
  SortByDaysPipe,
} from '@app/pipes';
import { GraphQLModule } from './graphql.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { lessonsReducer } from './_store/Lessons/lessons.reducer';
import { groupsReducer } from './_store/Groups/groups.reducer';
import { usersReducer } from './_store/Users/users.reducer';
import { roomsReducer } from './_store/Rooms/rooms.reducer';
import { LessonsEffects } from './_store/Lessons/lessons.effects';
import { GroupsEffects } from './_store/Groups/groups.effects';
import { RoomsEffects } from './_store/Rooms/rooms.effects';
import { UsersEffects } from './_store/Users/users.effects';
import { InfoComponent } from '@app/_pages';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    SheduleComponent,
    StatsComponent,
    LessonComponent,
    ResultsComponent,
    InfoComponent,
    NavigationComponent,
    RegisterComponent,
    PagenotfoundComponent,
    FooterComponent,
    AuthComponent,
    RulerComponent,
    LessonCardComponent,
    GroupSelectorComponent,
    UserSelectorComponent,
    SortByTimePipe,
    SortByDaysPipe,
    AddPreviousLessonEndPipe,
    GroupInfoComponent,
    UserInfoComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatDividerModule,
    GraphQLModule,
    FormsModule,
    MatMomentDateModule,
    StoreModule.forRoot({
      lessons: lessonsReducer,
      groupsState: groupsReducer,
      usersState: usersReducer,
      rooms: roomsReducer,
      router: routerReducer,
    }),
    EffectsModule.forRoot([
      LessonsEffects,
      GroupsEffects,
      RoomsEffects,
      UsersEffects,
    ]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
