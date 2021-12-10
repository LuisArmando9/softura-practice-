import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { Constants } from 'src/app/utils/constants';
import { HStore } from 'src/app/utils/hstore';


@Component({
  selector: 'app-contact-profile',
  templateUrl: './contact-profile.page.html',
  styleUrls: ['./contact-profile.page.scss'],
})
export class ContactProfilePage implements OnInit {
  contact:Contact ={
    phoneNumber:Constants.EMPTY_STRING,
    fullName:Constants.EMPTY_STRING,
    home:Constants.EMPTY_STRING,
    email:Constants.EMPTY_STRING,
    dayOfBirth:Constants.EMPTY_STRING,
    
  };
  constructor(private activeRoute: ActivatedRoute) 
  {
  

  }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(param=>{
      const lastId = HStore.getLastIdConcatInsert();
      const id = parseInt(param.get("contactId"));
      if(id >=0 && id<= lastId){
        this.contact = HStore.getContact(id);
      }
      
    });
  }

}
