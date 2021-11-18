import { Component } from "@angular/core";
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { HttpClient } from "@angular/common/http";
import {Router} from "@angular/router";

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
  constructor(private http:HttpClient, private router: Router){}
    
  email:String="";
  
  password:String="";

  async onSubmit(){
    const cuenta={
      email: this.email,
      password:this.password,
    }
   const authUrl = await this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBa0mdLVfJYIhjmxfWztucW1UxU5SG0GPI", cuenta).toPromise();
   this.router.navigate(["/"]);
  }

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