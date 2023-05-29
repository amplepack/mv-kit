import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UerDataResolver } from 'src/app/resolvers/userData.resolver';

import { MemberLoanReportPage } from './member-loan-report.page';

const routes: Routes = [
  {
    path: '',
    resolve: {
      userData: UerDataResolver
    },
    component: MemberLoanReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberLoanReportPageRoutingModule {}
