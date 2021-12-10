import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactRegisterPageRoutingModule } from './contact-register-routing.module';

import { ContactRegisterPage } from './contact-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactRegisterPageRoutingModule
  ],
  declarations: [ContactRegisterPage]
})
export class ContactRegisterPageModule {}
