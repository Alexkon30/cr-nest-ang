import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  LoginComponent,
  HomeComponent,
  InfoComponent,
  ProfileComponent,
  SheduleComponent,
  StatsComponent,
  LessonComponent,
  ResultsComponent,
  PagenotfoundComponent,
} from '@app/_components';
import { AuthGuard } from '@app/_helpers';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
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
