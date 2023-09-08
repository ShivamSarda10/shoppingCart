import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './cart-list/cart-list.component';
import { AddEditCartComponent } from './add-edit-cart/add-edit-cart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cart-list',
    pathMatch: 'full'
  },
  {
    path: 'cart-list',
    component: CartListComponent
  },
  {
    path: 'add-edit-item',
    component: AddEditCartComponent
  },
  {
    path: 'add-edit-item/:id',
    component: AddEditCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartModuleRoutingModule { }
