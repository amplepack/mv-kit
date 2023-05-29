import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeGuard } from 'src/app/guards/home.guard';
import { UerDataResolver } from 'src/app/resolvers/userData.resolver';

import { LoanFormPage } from './loan-form.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [HomeGuard],
    component: LoanFormPage,
    resolve: {
      userData: UerDataResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanFormPageRoutingModule {}
