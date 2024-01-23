import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'profil',
        loadChildren: () => import('../Navigation/profil/profil.module').then(m => m.ProfilPageModule)
      },
      {
        path: 'kurz',
        loadChildren: () => import('../Navigation/kurz/kurz.module').then(m => m.KurzPageModule)
      },
      {
        path: 'history',
        loadChildren: () => import('../Navigation/history/history.module').then(m => m.HistoryPageModule)
      },
      {
        path: '',
        redirectTo: '/Navigation/profil/profil',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/Navigation/profil/profil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
