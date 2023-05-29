import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepositFormPage } from './deposit-form.page';

import { HomeGuard } from 'src/app/guards/home.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [HomeGuard],
    component: DepositFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositFormPageRoutingModule {}
