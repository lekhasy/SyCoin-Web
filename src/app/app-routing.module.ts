import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WalletComponent } from './wallet/wallet/wallet.component';
import { LoginComponent } from './account/login/login.component';
import { GetKeyComponent } from './account/get-key/get-key.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'wallet',
    component: WalletComponent
  },
  {
    path: 'account',
    children: [
      {
        path: 'get-key',
        component: GetKeyComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: '',
    component: HomeComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
