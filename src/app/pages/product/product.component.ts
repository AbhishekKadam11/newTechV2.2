import {Component, OnInit} from '@angular/core';
import {INgxMyDpOptions, IMyDateModel} from 'ngx-mydatepicker';
import {FileHolder} from '../../../../node_modules/angular2-image-upload/lib/image-upload/image-upload.component';
import './ckeditor.loader';
import 'ckeditor';

import {ProductService} from './product.service'

@Component({
  selector: 'ngx-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  public product: any = {};  // model
  category: any[];
  brand: any[];
  public pathToName: string = 'name';
  productimages: Array<string> = [];
  savedSuccess: boolean = false;
  saveUnsuccess: boolean = false;
  dateOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'dd-mm-yyyy',
  };
  public items: string[] = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
    'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
    'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
    'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
    'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
    'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
    'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
    'Zagreb', 'Zaragoza', 'Łódź'];

  constructor(private productService: ProductService) {
    this.productService.productDropdownData().subscribe((result) => {
      this.category = result['category'];
      this.brand = result['brand'];
      console.log(this.category);
    });

  }

  ngOnInit() {
  }


  imageUploaded(file: FileHolder) {
    const image = file.serverResponse['_body'];
    this.productimages.push(image);
  }

  posterImageUploaded(file: FileHolder) {
    this.product['image'] = file.serverResponse['_body'];
    console.log(this.product['image']);
  }

  onRemoved(file: FileHolder) {
    console.log(file);
  }


  onSelectCategory($event) {
    this.product['category'] = $event['text'];
  }

  onSelectBrand($event) {
    this.product['brand'] = $event['text'];
  }

  setProduct() {

    if (this.productimages.length !== 0) {
      this.product['productimages'] = this.productimages;
    }
    if (this.product.arrivaldate) {
      this.product['arrivaldate'] = this.product.arrivaldate['jsdate'];
    } else {
      this.product['arrivaldate'] = this.product.arrivaldate;
    }
  //  console.log(this.product);
    this.productService.newProductAdd(this.product).subscribe((result) => {
      this.savedSuccess = true;
      setTimeout(() => {
        console.log(result);
        this.savedSuccess = false;
      }, 3000);
    }, (err) => {
      this.saveUnsuccess = true;
      setTimeout(() => {
        console.log(err);
        this.saveUnsuccess = false;
      }, 3000);
    });

  }


}
