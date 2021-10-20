import { Component } from "@angular/core";
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { slideInAnimation } from "src/app/animations";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
    selector: "login-component",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"],
})

export class LoginComponent {
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
      ]);
    passwordFormControl = new FormControl('', [
        Validators.required
    ]);

    matcher = new MyErrorStateMatcher();
}