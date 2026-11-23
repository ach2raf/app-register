import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-register-form',
  styleUrl: './register-form.css',
  templateUrl: './register-form.html',
})
export class RegisterForm {
  private router = inject(Router);

  courses = ['Angular', 'Spring Boot', 'Java', 'Python', 'Bases de datos'];

  hasUpper = /[A-Z]/;
  hasLower = /[a-z]/;
  hasNumber = /\d/;
  hasSpecial = /[^A-Za-z0-9]/;

  registerForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required, Validators.minLength(2), Validators.maxLength(30),
      Validators.pattern(/^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ ]+$/),
    ]),
    lastName: new FormControl('', [
      Validators.required, Validators.minLength(2), Validators.maxLength(50),
      Validators.pattern(/^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ ]+$/),
    ]),
    dni: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(\d{8}[A-Za-z]|[XYZxyz]\d{7}[A-Za-z])$/),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(\+34 ?)?[67]\d{8}$/),
    ]),
    username: new FormControl('', [
      Validators.required, Validators.minLength(4), Validators.maxLength(15),
      Validators.pattern(/^[A-Za-z][A-Za-z0-9_]*$/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required, Validators.minLength(8), Validators.maxLength(20),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/),
    ]),
    course: new FormControl('', Validators.required),
    hours: new FormControl<number | null>(null, [
      Validators.required, Validators.min(2), Validators.max(40),
    ]),
    postalCode: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/),
    ]),
    terms: new FormControl(false, Validators.requiredTrue),
  });

  isInvalidField(field: string) {
    return this.registerForm.get(field)?.invalid && (this.registerForm.get(field)?.dirty || this.registerForm.get(field)?.touched);
  }

  hasError(field: string, error: string) {
    return this.registerForm.get(field)?.hasError(error) && (this.registerForm.get(field)?.dirty || this.registerForm.get(field)?.touched);
  }

  missing(field: string, requirement: RegExp) {
    return (this.registerForm.get(field)?.dirty || this.registerForm.get(field)?.touched) && !!this.registerForm.get(field)?.value && !requirement.test(this.registerForm.get(field)?.value);
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    console.log(this.registerForm.value);
    this.router.navigate(['/pokemon-list']);
  }
}
