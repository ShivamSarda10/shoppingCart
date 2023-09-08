import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartModuleRoutingModule } from './cart-module-routing.module';
import { CartListComponent } from './cart-list/cart-list.component';
import { AddEditCartComponent } from './add-edit-cart/add-edit-cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CartListComponent,
    AddEditCartComponent
  ],
  imports: [
    CommonModule,
    CartModuleRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class CartModuleModule { }
