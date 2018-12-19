import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WalletModule } from './wallet/wallet.module';
import { AccountService } from './account/account.service';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WalletComponent } from './wallet/wallet/wallet.component';
import { LoginComponent } from './account/login/login.component';


import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { AccountModule } from './account/account.module';

const appRoutes: Routes = [
  {
    path: 'wallet',
    component: WalletComponent
  },
  {
    path: '',
    redirectTo: '/wallet',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    WalletModule,
    AccountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
