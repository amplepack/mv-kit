import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeGuard } from 'src/app/guards/home.guard';

import { FeesCollectionFormPage } from './fees-collection-form.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [HomeGuard],
    component: FeesCollectionFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeesCollectionFormPageRoutingModule {}
