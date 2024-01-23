import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KurzPageRoutingModule } from './kurz-routing.module';

import { KurzPage } from './kurz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KurzPageRoutingModule
  ],
  declarations: [KurzPage]
})
export class KurzPageModule {}
