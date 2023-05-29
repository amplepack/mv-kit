import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { FeesCollectionFormPage } from './fees-collection-form.page';

import { FeesCollectionFormPageRoutingModule } from './fees-collection-form-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeesCollectionFormPageRoutingModule,
  ],
  declarations: [FeesCollectionFormPage]
})
export class FeesCollectionFormPageModule {}
