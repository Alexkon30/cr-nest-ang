import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../_models';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<User>
  public user: Observable<User>
  public redirectUrl: string | null = null;

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

  login(email: string, password: string) { //TODO switch email to username
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, { email, password })
      .pipe(map(data => {
        const { accessToken: token , user, expiresIn } = data
        localStorage.setItem('user', JSON.stringify({...user, token, expiresIn}))
        this.userSubject.next(user)

        return user
      }))
  }

  logout() {
    localStorage.removeItem('user')
    this.userSubject.next(null);
    this.router.navigate(['/auth'])
  }

  register(username: string, email: string, password: string, confirmPassword: string) {
    console.log({username, email, password, confirmPassword})
  }
}
