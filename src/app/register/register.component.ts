import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // templates
  registerPage;
  signInPage;
  confirmationPage;
  errorPage;
  // register
  form;
  passMatch=true;
  formValidationFailed=false;
  errorMessage=false;
  validEmail=true;
  // signIn variables---- using ngModel for below instead of form. just to use something different
  formSignIn;
  // confirmationPage variables
  signedInAs="";

  constructor(
    private formBuilder: FormBuilder,
  ) { 
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email,Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
    this.formSignIn = this.formBuilder.group({
      userName: ['', [Validators.required,Validators.email]],
      logInPass: ['', Validators.required],
    });
    this.navigateTo("signInPage");
  }
  get email() {
    return this.form.get('email');
  } 

  navigateTo(screenName) {
    this.restError();
    this.registerPage=false;
    this.signInPage=false;
    this.confirmationPage=false;
    this.errorPage=false;
    if(screenName=='signInPage') {
      this.signInPage=true;
    } else if(screenName=='registerPage') {
      this.registerPage=true;
    } else if(screenName=='confirmationPage') {
      this.confirmationPage=true;
    } else {
      this.errorPage=true;
    }
  }

  onRegister() {
    if(this.form.invalid) {
          this.errorMessage=true;
    } else if(this.validatePasswordMatch()) {
      this.signedInAs=this.form.value.firstName;
      this.navigateTo("confirmationPage")
    }
  }

  onSignIn() {
    if(this.formSignIn.invalid) {
      this.errorMessage=true;
    } else {
      let userName = this.formSignIn.value.userName;
      this.signedInAs=userName.substring(0, userName.indexOf("@"));
      this.navigateTo("confirmationPage");
    }
  }

  validatePasswordMatch() {
    console.log(this.form.value.password)
    console.log(this.form.value.confirmPassword)
    if(this.form.value.password!=this.form.value.confirmPassword) {
      this.passMatch=false;
      return false;
    }
    return true;
  }
  restError() {
    // reseting the error message on pass validation
    this.passMatch=true;
    this.errorMessage=false;
  }
}
