import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HomeComponent,
  InfoComponent,
  ProfileComponent,
  SheduleComponent,
  StatsComponent,
  LessonComponent,
  ResultsComponent,
  PagenotfoundComponent,
  AuthComponent,
} from '@app/_components';
import { AuthGuard } from '@app/_helpers';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  {
    path: '',
    component: HomeComponent,
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
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
