import { AfterViewInit, Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../../../app/@core/data/state.service';
import { ProductListService} from '../productlist/productlist.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ngx-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
})

export class ProductlistComponent implements OnInit, AfterViewInit, OnDestroy {

  title: string;
  productType: string;
  public products: any;
  menu: any;
  public isRunning: boolean = true;

  @ViewChild(SidebarComponent) sidebar: SidebarComponent;
  protected productState$: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productListService: ProductListService,
              private stateService: StateService ) {
    this.stateService.setSidebarState(this.stateService.sidebars[0]);

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productType = params['productType'];
    });

    this.productState$ = this.productListService.notifyObservable$.subscribe((result) => {
      this.products = {};
      if (result) {
        this.getFilteredProductList(result);
      }
    });
  }

  ngAfterViewInit() {
    this.productState$ = this.productListService.productListData(this.productType)
      .subscribe((result) => {
        this.getProductList(result);
      })
  }

  getProductList(result) {
          if (result.hasOwnProperty('motherboard')) {
            this.products = result['motherboard'];
            this.title = 'Motherboard';
            let brands = this.getBrandname(result['motherboard']);
            this.sidebar.getmenus(brands, this.title);
          }
          if (result.hasOwnProperty('processor')) {
            this.products = result['processor'];
            this.title = 'Processor';
            let brands = this.getBrandname(result['processor']);
            this.sidebar.getmenus(brands, this.title);
          }
          if (result.hasOwnProperty('graphiccard')) {
            this.products = result['graphiccard'];
            this.title = 'Graphic Card';
            let brands = this.getBrandname(result['graphiccard']);
            this.sidebar.getmenus(brands, this.title);
          }
          if (result.hasOwnProperty('router')) {
            this.products = result['router'];
            this.title = 'Router';
            let brands = this.getBrandname(result['router']);
            this.sidebar.getmenus(brands, this.title);
          }
    this.isRunning = false;
  }

  getFilteredProductList(result) {
    if (result.hasOwnProperty('motherboard')) {
      this.products = result['motherboard'];
    }
    if (result.hasOwnProperty('processor')) {
      this.products = result['processor'];
    }
    if (result.hasOwnProperty('graphiccard')) {
      this.products = result['graphiccard'];
    }
    if (result.hasOwnProperty('motherboard')) {
      this.products = result['motherboard'];
    }
    if (result.hasOwnProperty('router')) {
      this.products = result['router'];
    }
    this.isRunning = false;
  }

  productDetails(productId) {
    this.router.navigate(['/pages/productdetails', productId ]);
  }

  public getBrandname(products) {
    let brands = [];
     for ( let i = 0; i < products.length; i++ ) {
       if ( !(brands.indexOf(products[i]['data']['brand']) > -1)) {
         brands.push(products[i]['data']['brand']);
       }
    }
    return brands;
  }

  ngOnDestroy() {
    this.productState$.unsubscribe();
  }

}
