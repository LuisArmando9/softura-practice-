import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ContactRegisterPage } from './contact-register.page';

const routes: Routes = [
  {
    path: '',
    component: ContactRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, ReactiveFormsModule],
})
export class ContactRegisterPageRoutingModule {}
