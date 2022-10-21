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
  LoginComponent,
  PagenotfoundComponent,
  FooterComponent
} from '@app/_components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
