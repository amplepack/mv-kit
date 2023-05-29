import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApproveLoanRepayPageRoutingModule } from './approve-loan-repay-routing.module';

import { ApproveLoanRepayPage } from './approve-loan-repay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApproveLoanRepayPageRoutingModule
  ],
  declarations: [ApproveLoanRepayPage]
})
export class ApproveLoanRepayPageModule {}
