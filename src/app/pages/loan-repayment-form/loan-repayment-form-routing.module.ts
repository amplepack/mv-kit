import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeGuard } from 'src/app/guards/home.guard';
import { UerDataResolver } from 'src/app/resolvers/userData.resolver';

import { LoanRepaymentFormPage } from './loan-repayment-form.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [HomeGuard],
    resolve: {
      userData: UerDataResolver
    },
    component: LoanRepaymentFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanRepaymentFormPageRoutingModule {}
