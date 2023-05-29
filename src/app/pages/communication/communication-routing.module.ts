import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunicationPage } from './communication.page';

import { HomeGuard } from 'src/app/guards/home.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [HomeGuard],
    component: CommunicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunicationPageRoutingModule {}
