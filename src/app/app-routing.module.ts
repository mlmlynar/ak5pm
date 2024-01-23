import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./Navigation/profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'kurz',
    loadChildren: () => import('./Navigation/kurz/kurz.module').then( m => m.KurzPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./Navigation/history/history.module').then( m => m.HistoryPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
