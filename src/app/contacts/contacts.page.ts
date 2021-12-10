import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { HStore } from '../utils/hstore';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
   /**
   * 
   * get all contact that store in localstorage for show in ion-list
   */
  contacts:Contact[];
  constructor() 
  {
    

  }

  ngOnInit() { 
    this.contacts = HStore.getAllContacts();
  }

}
