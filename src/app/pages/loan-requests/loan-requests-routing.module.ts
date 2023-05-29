import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UerDataResolver } from 'src/app/resolvers/userData.resolver';

import { LoanRequestsPage } from './loan-requests.page';

const routes: Routes = [
  {
    path: '',
    resolve: {
      userData: UerDataResolver
    },
    component: LoanRequestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanRequestsPageRoutingModule {}
