import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService} from '../searchresult/searchresult.service';
import { GlobalShared } from '../../app.global';

@Component({
  selector: 'ngx-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss'],
})
export class SearchresultComponent implements OnInit {

  searchkey;
  public products: any;
  public productType: any = {'All': true};
  radioModel = 'left';
  typeChoice: any;
  errorMessage: string;

  choice = ['All'];
  constructor(private route: ActivatedRoute,
              private router: Router,
              public globalShared: GlobalShared,
              private searchService: SearchService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.searchkey = params['searchkey'];
      this.searchService.searchItem(params['searchkey']).subscribe((result) => {
        this.products = result;
        for (const value of this.products) {
          this.choice.push(value['category']);
        }
      }, (error) => {
        console.log(error);
        this.errorMessage = error['error'];
      })

    });
  }

  filterProducts(type) {
    console.log(type);
  }

}
