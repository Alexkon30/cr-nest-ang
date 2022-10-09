import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../_models';
import { environment } from '@environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<User>
  public user: Observable<User>

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable()
  }

  public get userValue(): User {
    return this.userSubject.value
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, { email, password })
    .pipe()
  }

  logout() {
    localStorage.removeItem('user')
    this.userSubject.next(null);
    this.router.navigate(['/login'])
  }
}
