import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService} from '../searchresult/searchresult.service';

@Component({
  selector: 'ngx-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss'],
})
export class SearchresultComponent implements OnInit {

  searchkey;
  public products: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private searchService: SearchService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.searchkey = params['searchkey'];
      this.searchService.searchItem(params['searchkey']).subscribe((result) => {
        this.products = result;
        console.log(result);
      })
    });
  }

}
