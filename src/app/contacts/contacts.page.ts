import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { HStore } from '../utils/hstore';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  contacts = HStore.getAllContacts();
  constructor() 
  {
    

  }

  ngOnInit() { 
  }

}
