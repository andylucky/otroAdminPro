import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { pagesRoutingModule } from './pages/pages.routing';
import { authRoutingMmodule } from './auth/auth.routing';


const routes: Routes = [
 
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  { path: '**', component: NopagefoundComponent }
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ),
    pagesRoutingModule,
    authRoutingMmodule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
