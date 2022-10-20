import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorInterceptor, JwtInterceptor } from '@app/_helpers';
import {
  ProfileComponent,
  HomeComponent,
  SheduleComponent,
  StatsComponent,
  LessonComponent,
  ResultsComponent,
  InfoComponent,
  NavigationComponent,
  RegisterComponent,
  LoginComponent
} from '@app/_components';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
