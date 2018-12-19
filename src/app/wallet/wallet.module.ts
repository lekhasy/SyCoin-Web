import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet/wallet.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [WalletComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    WalletComponent
  ]
})
export class WalletModule { }
