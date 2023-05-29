import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeGuard } from 'src/app/guards/home.guard';
import { UerDataResolver } from 'src/app/resolvers/userData.resolver';

import { WithdrawPage } from './withdraw.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [HomeGuard],
    component: WithdrawPage,
    resolve: {
      userData: UerDataResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WithdrawPageRoutingModule {}
