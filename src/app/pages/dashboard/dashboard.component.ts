import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service'
import { NgxCarousel } from 'ngx-carousel';
// import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { StateService } from '../../../app/@core/data/state.service';
import { GlobalShared } from '../../app.global';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',

})

export class DashboardComponent implements OnInit {

  dashboardProducts;
  processor;
  graphiccard;
  monitor;
  routers;
  motherboard;
  public isRunning: boolean = true;
  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;

  constructor(private dashboardService: DashboardService, public globalShared: GlobalShared,
              private router: Router, private stateService: StateService) {

    this.stateService.setSidebarState(this.stateService.sidebars[2]);

    this.dashboardService.dashboardProductList().subscribe((result) => {
      this.dashboardProducts = result;
      this.processor = result['processor'];
      this.graphiccard = result['graphiccard'];
      this.motherboard = result['motherboard'];
      this.monitor = result['monitor'];
      this.routers = result['router'];
    //  this.spinnerService.hide();
      this.isRunning = false;
    });

  }

  slides: any;

  ngOnInit() {
    this.carouselTile = {
      grid: {xs: 2, sm: 3, md: 3, lg: 5, all: 0},
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

    this.slides = [
      {
        id: 'slide-1',
        img: {
          url: '../../../assets/images/slides/banner1.jpg',
        },
      },
      {
        id: 'slide-2',
        img: {
          url: '../../../assets/images/slides/banner2.jpg',
        },
      },
      {
        id: 'slide-3',
        img: {
          url: '../../../assets/images/slides/banner3.jpg',
        },
      },
      {
        id: 'slide-4',
        img: {
          url: '../../../assets/images/slides/banner4.jpg',
        },
      },
      {
        id: 'slide-5',
        img: {
          url: '../../../assets/images/slides/banner5.jpg',
        },
      },
    ];

  }

  public carouselTileLoad(evt: any) {

    // const len = this.carouselTileItems.length
    // if (len <= 30) {
    //   for (let i = len; i < len + 10; i++) {
    //     this.carouselTileItems.push(i);
    //   }
    // }

  }

  startLoadingSpinner() {
  //  this.spinnerService.show();
    // To test threshold change delay in query string it accepts time in secs
    }

  productDetails(productId) {
    this.router.navigate(['/pages/productdetails', productId ]);
  //  this.router.navigateByUrl('pages/productDetails');
  }



}
