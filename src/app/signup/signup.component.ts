import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
   }

   createForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }

  tryRegister(value){
    this.authService.doRegister(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "Your account has been created";
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }

}
