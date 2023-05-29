import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeGuard } from 'src/app/guards/home.guard';

import { SharesPage } from './shares.page';

import { UerDataResolver } from "../../resolvers/userData.resolver";

const routes: Routes = [
  {
    path: '',
    canActivate: [HomeGuard],
    component: SharesPage,
    resolve: {
      userData: UerDataResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharesPageRoutingModule {}
