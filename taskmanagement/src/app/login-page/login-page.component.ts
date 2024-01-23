import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  loginForm!: FormGroup;
  
  constructor(private fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userId: ['', [Validators.required, Validators.minLength(4)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          this.containsUppercase,
          this.containsNumber,
          this.containsSpecialCharacter
        ]
      ]
    });
  }


  get userId() {
    return this.loginForm.get('userId');
  }

  get password() {
    return this.loginForm.get('password');
  }

  containsUppercase(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value;
    if (/[A-Z]/.test(value)) {
      return null;
    }
    return { uppercase: true };
  }

  containsNumber(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value;
    if (/\d/.test(value)) {
      return null;
    }
    return { number: true };
  }

  containsSpecialCharacter(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      return null;
    }
    return { specialCharacter: true };
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted:', this.loginForm.value);
      this.router.navigate(['/home'])
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}

