import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  LoginComponent,
  HomeComponent,
  InfoComponent,
  ProfileComponent,
  SheduleComponent,
  StatsComponent,
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
        path: '',
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
    ],
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
