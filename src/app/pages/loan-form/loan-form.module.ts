import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanFormPageRoutingModule } from './loan-form-routing.module';

import { LoanFormPage } from './loan-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanFormPageRoutingModule
  ],
  declarations: [LoanFormPage]
})
export class LoanFormPageModule {}
