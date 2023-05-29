import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApproveDepositsPage } from './approve-deposits.page';

const routes: Routes = [
  {
    path: '',
    component: ApproveDepositsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApproveDepositsPageRoutingModule {}
