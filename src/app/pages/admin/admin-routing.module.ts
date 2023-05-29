import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeGuard } from 'src/app/guards/home.guard';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [HomeGuard],
    component: AdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
