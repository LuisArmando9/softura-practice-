import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HStore } from '../utils/hstore';


@Component({
  selector: 'app-contact-register',
  templateUrl: './contact-register.page.html',
  styleUrls: ['./contact-register.page.scss'],
})
export class ContactRegisterPage implements OnInit {
  formContact:FormGroup;
  message:string;
   /**
   * 
   * creat a new form and add validate for it
   */
  createFormContact(){
    this.formContact = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      home:new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      dayOfBirth:new FormControl('', [Validators.required]),
    });
  }
  constructor(private route: Router) { }

  ngOnInit() {
    this.createFormContact();
  }
   /**
   * 
   * creat a new contact
   */
  createNewContact(){
    if(this.formContact.valid){
        let lastContact = HStore.getLastIdConcatInsert();
        
        localStorage.setItem("contact"+lastContact, JSON.stringify(this.formContact.value));
        this.route.navigate(['/contacts']);
    }else{
      this.message = "Campos invalidos";

    }

  }

}
