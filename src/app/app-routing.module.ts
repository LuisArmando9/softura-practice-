import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'contact-profile',
    loadChildren: () => import('./contacts/contact-profile/contact-profile.module').then( m => m.ContactProfilePageModule)
  },
  {
    path: 'contact-register',
    loadChildren: () => import('./contact-register/contact-register.module').then( m => m.ContactRegisterPageModule)
  },
  {
    path: 'contacts',
    children:[{
      path:"",
      loadChildren: () => import('./contacts/contacts.module').then( m => m.ContactsPageModule)
    },
    {
      path:":contactId",
      loadChildren: () => import('./contacts/contact-profile/contact-profile.module').then( m => m.ContactProfilePageModule)
    }
  ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
