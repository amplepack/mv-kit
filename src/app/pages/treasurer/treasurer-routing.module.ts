import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeGuard } from 'src/app/guards/home.guard';

import { TreasurerPage } from './treasurer.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [HomeGuard],
    component: TreasurerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreasurerPageRoutingModule {}
