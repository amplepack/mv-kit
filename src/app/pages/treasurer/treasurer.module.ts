import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreasurerPageRoutingModule } from './treasurer-routing.module';

import { TreasurerPage } from './treasurer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreasurerPageRoutingModule
  ],
  declarations: [TreasurerPage]
})
export class TreasurerPageModule {}
