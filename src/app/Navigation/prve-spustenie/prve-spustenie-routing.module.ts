import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrveSpusteniePage } from './prve-spustenie.page';

const routes: Routes = [
  {
    path: '',
    component: PrveSpusteniePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrveSpusteniePageRoutingModule {}
