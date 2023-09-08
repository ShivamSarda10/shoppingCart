import { Component, OnInit } from '@angular/core';
import { CartList } from '../cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  constructor(private _router: Router) {

  }

  cartList: Array<CartList> = []

  ngOnInit(): void {

    if (localStorage.getItem('cartList')) {
      this.cartList = JSON.parse(localStorage.getItem('cartList')!)
    }
  }

  deleteItem(index: any) {
    this.cartList.splice(index, 1);
    localStorage.setItem('cartList', JSON.stringify(this.cartList))
  }


  editItem(index: any) {
    this._router.navigate([`/cart/add-edit-item/${index}`])
  }
}
