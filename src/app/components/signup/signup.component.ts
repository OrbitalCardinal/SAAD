import { Component } from "@angular/core";
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { slideInAnimation } from "src/app/animations";
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  }

@Component({
    selector: "signup-component",
    templateUrl: "./signup.component.html",
    styleUrls: ["./signup.component.css"],
})

export class SignupComponent {
  nameFormControl=new FormControl('', [
    Validators.required,
  ])  
  
  emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
      ]);
    passwordFormControl = new FormControl('', [
        Validators.required
    ]);

    confirmPasswordFormControl = new FormControl('', [
        Validators.required
    ]);

    matcher = new MyErrorStateMatcher();
}