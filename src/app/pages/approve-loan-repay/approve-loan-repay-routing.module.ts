import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApproveLoanRepayPage } from './approve-loan-repay.page';

const routes: Routes = [
  {
    path: '',
    component: ApproveLoanRepayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApproveLoanRepayPageRoutingModule {}
