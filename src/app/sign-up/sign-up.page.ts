import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import { Constants } from '../utils/constants';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})

export class SignUpPage implements OnInit {

  user: User ={
    user:Constants.EMPTY_STRING,
    password:Constants.EMPTY_STRING,
    email:Constants.EMPTY_STRING
  };
  registerForm:FormGroup;
  message:string;
  constructor(private route: Router) { 
   
  }
  /**
   * 
   * @returns boolean check if the passwords are valid
   */
  private isValidPassword():boolean{
    return this.registerForm.value.password == this.registerForm.value.confirmPassword;
  }
   /**
   * 
   * creating new form for validate
   */
  createForm(){
    this.registerForm = new FormGroup({
      user: new FormControl('', [Validators.required, Validators.min(3), Validators.max(255) ]),
      email:new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl('', [Validators.required, Validators.min(4) ]),
      confirmPassword:  new FormControl('', [Validators.required,Validators.min(4)]),
    });
  }

  ngOnInit():void{
    this.createForm();
    
  }
  /**
   * step up object for user and add it to local storage
   */
  private setUserCredentials(){
        this.user.user = this.registerForm.value.user;
        this.user.password = this.registerForm.value.password;
        this.user.email =this.registerForm.value.email;
        localStorage.setItem("user", JSON.stringify(this.user) );
  }
  /**
   * valid the from and create new account in local storage
   */
 createNewAccount(){
    if(this.registerForm.valid)
    {
      if(this.isValidPassword()){
        this.message="";
        this.setUserCredentials();
        this.route.navigate(['/sign-in']);
      }else{
        this.message ="Las contraseñas no coinciden";
      }

    }else{
      this.message = "Campos incorrectos!";
    }
   
  }

}
