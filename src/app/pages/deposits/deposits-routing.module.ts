import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeGuard } from 'src/app/guards/home.guard';

import { DepositsPage } from './deposits.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [HomeGuard],
    component: DepositsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositsPageRoutingModule {}
