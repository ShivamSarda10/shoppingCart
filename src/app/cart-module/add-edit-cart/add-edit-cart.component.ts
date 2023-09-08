import { Component, OnInit } from '@angular/core';
import { CartList } from '../cart.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-cart',
  templateUrl: './add-edit-cart.component.html',
  styleUrls: ['./add-edit-cart.component.scss']
})
export class AddEditCartComponent implements OnInit {

  constructor(private _fb: FormBuilder, private _activatedRoute: ActivatedRoute, private _router: Router) {

  }
  cartList: Array<CartList> = [];
  addItemForm!: FormGroup;
  itemId: any;

  ngOnInit(): void {
    if (localStorage.getItem('cartList')) {
      this.cartList = JSON.parse(localStorage.getItem('cartList')!)
    }

    this.createForm();
  }


  createForm() {
    this.itemId = this._activatedRoute.snapshot.paramMap.get('id') || '';
    if (this.itemId) {
      const editForm = this.cartList[this.itemId]
      this.addItemForm = this._fb.group({
        item_name: [editForm.item_name, Validators.required],
        item_price: [editForm.item_price, Validators.required]
      })
    } else {
      this.addItemForm = this._fb.group({
        item_name: ['', Validators.required],
        item_price: ['', Validators.required]
      })
    }
  }

  addItem() {
    if (this.itemId) {
      this.cartList.splice(this.itemId, 1)
      let filledData: any = {
        item_name: this.addItemForm.controls['item_name'].value,
        item_price: this.addItemForm.controls['item_price'].value
      }
      this.cartList.push(filledData)
      localStorage.setItem('cartList', JSON.stringify(this.cartList))
      this.addItemForm.reset()
      this._router.navigate(['/cart/cart-list'])
    } else {
      let filledData: any = {
        item_name: this.addItemForm.controls['item_name'].value,
        item_price: this.addItemForm.controls['item_price'].value
      }
      this.cartList.push(filledData)
      localStorage.setItem('cartList', JSON.stringify(this.cartList))
      this.addItemForm.reset()
      this._router.navigate(['/cart/cart-list'])
    }
  }
}
