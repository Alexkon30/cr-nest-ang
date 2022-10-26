import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
  InfoComponent,
  NavigationComponent,
  PagenotfoundComponent,
  FooterComponent,
  AuthComponent,
  LoginComponent,
  RegisterComponent,
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
    PagenotfoundComponent,
    FooterComponent,
    AuthComponent,
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
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
