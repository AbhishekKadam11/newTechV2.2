import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsService } from '../productdetails/productdetails.service';
import { ProductreviewService } from './productreview.service';
import { GlobalShared} from '../../app.global';
// import '../product/ckeditor.loader';
// import 'ckeditor';

@Component({
  selector: 'ngx-productreview',
  templateUrl: './productreview.component.html',
  styleUrls: ['./productreview.component.scss']
})
export class ProductreviewComponent implements OnInit {

  productid: string;
  product: any = {};
  review: any = {};

  constructor(private route: ActivatedRoute, private router: Router,
              public globalShared: GlobalShared,
              private productreviewservice: ProductreviewService,
              private productdetailservice: ProductDetailsService) {
    this.route.params.subscribe(params => {
           this.productid = params['productId'];
      this.getProductDetails(this.productid)
    });

  }

  ngOnInit() {

  }

  getProductDetails(productId) {
    this.productdetailservice.productDescriptionData(productId).subscribe((result) => {
      this.product['brand'] = result['data']['brand'];
      this.product['title'] = result['data']['title'];
      this.product['image'] = result['image'];
      console.log(this.product);
    }, (err) => {
      console.log(err);
    });
  }

  submitReview() {
    this.review['productId'] = this.productid;
  // console.log(this.review);
    this.productreviewservice.setUserReiview(this.review).subscribe((result) => {
      this.router.navigate(['/pages/productdetails', this.productid ]);
    //  console.log(result);
    }, (err) => {
      console.log(err);
    });
  }

}
