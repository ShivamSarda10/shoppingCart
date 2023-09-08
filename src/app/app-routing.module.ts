import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cart',
    pathMatch: 'full'
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart-module/cart-module.module').then((m: any) => m.CartModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
