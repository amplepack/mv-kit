import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectionReportPage } from './collection-report.page';

const routes: Routes = [
  {
    path: '',
    component: CollectionReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionReportPageRoutingModule {}
