import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexGuard } from 'src/app/guards/index.guard';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [IndexGuard],
    component: LoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
