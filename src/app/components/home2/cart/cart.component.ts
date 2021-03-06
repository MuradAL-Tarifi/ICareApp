import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../home.service';
import { Home2Component } from '../home2.component';
import { CartItemModel } from '../models/cartItem.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItemModel[];
  total: number = 0;
  constructor(
    private homeService: HomeService,
    private Toastr: ToastrService,
    private homeComponent: Home2Component,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCartItems();
  }

  add(id: number) {
    this.homeService.AddQuantity(id).subscribe();
    this.ngOnInit();
  }
  minus(id: number, q: number) {
    if (q <= 1) {
      this.Toastr.warning("Quantity can't be less than 1", '', {
        timeOut: 1000,
      });
    } else {
      this.homeService.MinusQuantity(id).subscribe();
      this.ngOnInit();
    }
  }
  Change(id: number, q: number) {
    if (q < 1) {
      this.Toastr.warning("Quantity can't be less than 1", '', {
        timeOut: 1000,
      });
      this.cartItems.find((data) => data.cartId == id).quantity = 1;
    } else {
      this.homeService.ChangeQuantity(id, q).subscribe();
      this.ngOnInit();
    }
  }
  async getCartItems() {
    await this.homeService
      .GetCartItems()
      .toPromise()
      .then((response) => {
        this.cartItems = response.data;
        this.total = 0;
        response.data.forEach((element) => {
          this.total = this.total + element.price * element.quantity;
        });
      });
  }

  deleteItem(id: number) {
    this.homeService.DeleteCartItem(id).subscribe((response) => {
      if (response.success == true) {
        this.Toastr.success('Item Deleted Successfully', 'Deleted', {
          timeOut: 1000,
        });
        this.ngOnInit();
        this.homeComponent.ngOnInit();
      }
    });
  }

  CheckOut() {
    if (this.cartItems.length == 0) {
      this.Toastr.warning('You must have one item at least to checkout', '', {
        timeOut: 1500,
      });
    } else {
      this.router.navigate(['/Home/CheckOut']);
    }
  }
}
