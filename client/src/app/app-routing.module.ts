import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HomeComponent,
  ProfileComponent,
  SheduleComponent,
  StatsComponent,
  LessonComponent,
  ResultsComponent,
  PagenotfoundComponent,
  AuthComponent,
} from '@app/_components';
import { AuthGuard } from '@app/_helpers';
import { InfoComponent } from '@app/_pages';
import { GroupInfoComponent } from './_components/group-info/group-info.component';
import { UserInfoComponent } from './_components/user-info/user-info.component';
import { GroupSelectorComponent } from './_components/group-selector/group-selector.component';
import { UserSelectorComponent } from './_components/user-selector/user-selector.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'shedule',
        component: SheduleComponent,
      },
      {
        path: 'stats',
        component: StatsComponent,
      },
      {
        path: 'info',
        component: InfoComponent,
        children: [
          {
            path: 'groups',
            component: GroupSelectorComponent,
            children: [
              {
                path: ':id',
                component: GroupInfoComponent
              }
            ]
          },
          {
            path: 'users',
            component: UserSelectorComponent,
            children: [
              {
                path: ':id',
                component: UserInfoComponent
              }
            ]
          }
        ]
      },
      {
        path: 'lesson/:id',
        component: LessonComponent,
      },
      {
        path: 'results/:id',
        component: ResultsComponent,
      },
      {
        path: '**',
        component: PagenotfoundComponent,
      },
    ],
  },
  // { path: '**',  redirectTo: '', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
