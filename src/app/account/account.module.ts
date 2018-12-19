import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { GetKeyComponent } from './get-key/get-key.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent, GetKeyComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [LoginComponent]
})
export class AccountModule { }
