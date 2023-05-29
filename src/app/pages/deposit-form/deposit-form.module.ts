import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepositFormPageRoutingModule } from './deposit-form-routing.module';

import { DepositFormPage } from './deposit-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepositFormPageRoutingModule
  ],
  declarations: [DepositFormPage]
})
export class DepositFormPageModule {}
