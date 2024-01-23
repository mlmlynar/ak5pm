import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KurzPage } from './kurz.page';

const routes: Routes = [
  {
    path: '',
    component: KurzPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KurzPageRoutingModule {}
