import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup,  Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})

export class SignInPage implements OnInit {
  signInForm:FormGroup; 
  message:string;
   /**
   * 
   *create new for for validating
   */
  createSignInForm(){
    this.signInForm =  new FormGroup({
      email:new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl('', [Validators.required, Validators.min(4) ]),
    });
  }
  constructor(private route: Router) {
   
  }

  ngOnInit() {
    this.createSignInForm();
  }
   /**
   * 
   * @returns boolean check if the creadentials are valid
   */
  private areCorrectCredentials():boolean{
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
      console.log(user)
      return (user.email == this.signInForm.value.email) &&
       (user.password == this.signInForm.value.password);
    }
    return false;
  }
   /**
   * 
   * creating new session and redirec to contacts
   */
  login(){
    const user = JSON.parse(localStorage.getItem('user'));
    if(this.signInForm.valid){
      if(this.areCorrectCredentials()){
        this.route.navigate(['/contacts']);
      }else{
        this.message ="Credenciales incorrectas";
      }
    }else{
      this.message ="Campos invalidos!";
    }
    
  }

}
