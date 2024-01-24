import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrveSpusteniePageRoutingModule } from './prve-spustenie-routing.module';

import { PrveSpusteniePage } from './prve-spustenie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrveSpusteniePageRoutingModule
  ],
  declarations: [PrveSpusteniePage]
})
export class PrveSpusteniePageModule {}
