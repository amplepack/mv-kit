import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApproveDepositsPageRoutingModule } from './approve-deposits-routing.module';

import { ApproveDepositsPage } from './approve-deposits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApproveDepositsPageRoutingModule
  ],
  declarations: [ApproveDepositsPage]
})
export class ApproveDepositsPageModule {}
