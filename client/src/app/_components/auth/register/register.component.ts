import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@app/_services';
import { first } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  // submitted = false;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  @Output() changeMode = new EventEmitter<string>();

  handleChangeMode() {
    this.changeMode.emit('login');
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.register(
      this.f['username'].value,
      this.f['email'].value,
      this.f['password'].value,
      this.f['confirmPassword'].value
    );
    // .pipe(first())
    // .subscribe({
    //   next: () => {
    //     const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/shedule';
    //     this.router.navigateByUrl(returnUrl);
    //   },
    //   error: (error) => {
    //     this.error = error;
    //     this.loading = false;
    //   },
    // });
  }
}
