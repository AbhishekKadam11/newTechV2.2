import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductDetailsService } from './productdetails.service'
import { StateService } from '../../../app/@core/data/state.service';
import { CartService } from '../cart/cart.service';
import { NgxCarousel } from 'ngx-carousel';
import { GlobalShared } from '../../app.global';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss'],
})
export class ProductdetailsComponent implements OnInit {

  productid: string;
  product: any= {};
  starRate: number = 4;
  brand;
  title;
  price;
  modalno;
  shortdescription;
  fulldescription;
  image;
  productimages;
  productData;
  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;

  constructor(private route: ActivatedRoute, private router: Router,
              private productdetailsaervice: ProductDetailsService,
              private stateService: StateService,
              private cdRef: ChangeDetectorRef,
              private globalShared: GlobalShared,
              private cartService: CartService) {

    this.stateService.setSidebarState(this.stateService.sidebars[2]);

  }

  ngOnInit() {

      this.carouselTile = {
        grid: {xs: 1, sm: 2, md: 2, lg: 3, all: 0},
        slide: 2,
        speed: 400,
        animation: 'lazy',
        point: {
          visible: false,
        },
        load: 2,
        touch: true,
        easing: 'ease',
      };

    this.route.params.subscribe(params => {
      this.productid = params['productId'];
    });

    this.productdetailsaervice.productDescriptionData(this.productid).subscribe((result) => {
      // console.log(result);
      this.product['brand'] = result['data']['brand'];
      this.product['title'] = result['data']['title'];
      this.product['price'] = result['data']['price'];
      this.product['baseprice'] = result['data']['price'];
      this.product['modalno'] = result['data']['modalno'];
      this.product['shortdescription'] = result['data']['shortdescription'];
      this.product['fulldescription'] = result['data']['fulldescription'];
      this.product['image'] = result['image'];
      this.product['productimages'] = result['imagearray'];
      this.product['quantity'] = 1;
      this.product['id'] = result['data']['_id'];
    //  this.productData = result;
    }, (err) => {
      console.log(err);
    });

  }

  showimage(index): void {
   // this.image = '';
    let keepGoing = true;

    this.productimages.forEach(function (val, key) {

      if (keepGoing) {
        if (key === index ) {
      //    console.log(val.toString());
          this.image = val.toString();

          keepGoing = false;
        }
      }

    })

  }

  public carouselTileLoad(evt: any) {

    // const len = this.carouselTileItems.length
    // if (len <= 30) {
    //   for (let i = len; i < len + 10; i++) {
    //     this.carouselTileItems.push(i);
    //   }
    // }

  }

  //------Add to cart----

  AddProduct() {
  //  this.product['added'] = true;

    this.cartService.addProduct(this.product);
  }



}
