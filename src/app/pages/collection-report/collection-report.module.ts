import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollectionReportPageRoutingModule } from './collection-report-routing.module';

import { CollectionReportPage } from './collection-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollectionReportPageRoutingModule
  ],
  declarations: [CollectionReportPage]
})
export class CollectionReportPageModule {}
