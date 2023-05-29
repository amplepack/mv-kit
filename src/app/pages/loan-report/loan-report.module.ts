import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanReportPageRoutingModule } from './loan-report-routing.module';

import { LoanReportPage } from './loan-report.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanReportPageRoutingModule
  ],
  declarations: [LoanReportPage]
})
export class LoanReportPageModule {}
