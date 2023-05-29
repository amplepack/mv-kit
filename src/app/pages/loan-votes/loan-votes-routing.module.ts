import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UerDataResolver } from 'src/app/resolvers/userData.resolver';

import { LoanVotesPage } from './loan-votes.page';

const routes: Routes = [
  {
    path: '',
    resolve: {
      userData: UerDataResolver
    },
    component: LoanVotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanVotesPageRoutingModule {}
