import { Component } from "@angular/core";
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { slideInAnimation } from "src/app/animations";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

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
  constructor(private router:Router, private http:HttpClient){}
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
      ]);
    passwordFormControl = new FormControl('', [
        Validators.required
    ]);

    email:String="";
  
    password:String="";
    async onSubmit() {
      const cuentas={
        email:this.email,
        password:this.password,
      }
      try {
        const response:any = await this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBa0mdLVfJYIhjmxfWztucW1UxU5SG0GPI", cuentas).toPromise();
        this.router.navigate(["/home"]);

      } catch(error) {
        console.log(error);
      }
    } 

    matcher = new MyErrorStateMatcher();
}