import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanRepaymentFormPageRoutingModule } from './loan-repayment-form-routing.module';

import { LoanRepaymentFormPage } from './loan-repayment-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanRepaymentFormPageRoutingModule
  ],
  declarations: [LoanRepaymentFormPage]
})
export class LoanRepaymentFormPageModule {}
