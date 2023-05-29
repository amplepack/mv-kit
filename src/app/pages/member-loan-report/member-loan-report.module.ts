import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemberLoanReportPageRoutingModule } from './member-loan-report-routing.module';

import { MemberLoanReportPage } from './member-loan-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemberLoanReportPageRoutingModule
  ],
  declarations: [MemberLoanReportPage]
})
export class MemberLoanReportPageModule {}
