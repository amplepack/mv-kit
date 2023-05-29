import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanVotesPageRoutingModule } from './loan-votes-routing.module';

import { LoanVotesPage } from './loan-votes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanVotesPageRoutingModule
  ],
  declarations: [LoanVotesPage]
})
export class LoanVotesPageModule {}
