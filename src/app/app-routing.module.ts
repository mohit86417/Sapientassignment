import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'route1',
    loadChildren: () => import('./route1/route1.module').then(m => m.Route1Module)
  },
  {
    path: 'route2',
    loadChildren: () => import('./route2/route2.module').then(m => m.Route2Module)
  },
  {
    path: 'route3',
    loadChildren: () => import('./route3/route3.module').then(m => m.Route3Module)
  },
 
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
