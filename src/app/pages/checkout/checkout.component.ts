import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { CheckoutService } from './checkout.service'
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {

  public cartData: any = {};
  public total: number;
  public orderData: any = {};
  private isloggedIn: any;
  isEmpty: boolean = true;

  constructor(private  cartservice: CartService, private checkoutservice: CheckoutService,
              private router: Router) {

  }

  ngOnInit() {
    this.cartData = this.cartservice.getCartItems();
    if (this.cartData) {
      this.cartData = JSON.parse(this.cartData);
      this.getTotalAmmount();
      this.isEmpty = false;
    }

  }

  getcartData(cartData) {

  }

  addQuantity(item) {
    this.cartData.forEach(function (value)  {
        if ( value['id'] === item['id']) {
          ++value['quantity'];
          value['price'] = item['baseprice'] * value['quantity'];
        }
    });
    this.getTotalAmmount();
  }

  decressQuantity(item) {
    this.cartData.forEach(function (value)  {
      if ( value['id'] === item['id']) {
        --value['quantity'];
        value['price'] = value['price'] - item['baseprice'];

      }
    });
    this.getTotalAmmount();
  }
  getTotalAmmount() {
   // this.total = 0;
    let total: number = 0;
    if (this.cartData) {
      this.cartData.forEach(function (value)  {
        total += value['price'];
      });
    }

    this.total = total;
  }

  removeItem(index) {
    this.cartservice.removeProduct(index);
    this.cartData.splice(index, 1);
    this.getTotalAmmount();
    if (this.cartData.length === 0) {
      this.isEmpty = true;
    }
  }

  checkoutCart() {

    const checkoutData: any = [];
    let requestOrder: any = [];
    let totalamount: number = 0;
    this.cartData.map(function (item) {
      const orderData = {};
      orderData['productId'] = item['id'];
      orderData['quantity'] = item['quantity'];
      orderData['price'] = item['price'];
      totalamount += item['price'];
      checkoutData.push(orderData);
    });
    if (checkoutData.length !== 0) {
      requestOrder = {'orderData': checkoutData, 'totalamount': totalamount};
      this.isloggedIn = localStorage.getItem('auth_token');
      if (this.isloggedIn) {
        this.checkoutservice.placeOrder(requestOrder)
          .subscribe((result) => {
            this.cartservice.emptyCart();
            this.router.navigate(['/pages/dashboard']);
          }, (err) => {
            console.log(err)
          });
      } else {
        this.router.navigate(['/auth/login']);
      }
    }
  }


}
