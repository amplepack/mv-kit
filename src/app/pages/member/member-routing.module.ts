import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeGuard } from 'src/app/guards/home.guard';

import { MemberPage } from './member.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [HomeGuard],
    component: MemberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberPageRoutingModule {}
