import { Component, OnInit } from '@angular/core';
import { Product } from './products';
import { AppServiceService } from '../services/app-service.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  model: any = Product;
  newValue: number = 0.2;
  constructor(
    public appServiceService: AppServiceService
  ) {
    this.model = new Product(1, 'ProductA');
  }

  ngOnInit() {
    let myString = this.appServiceService.getString();
    console.log("I'm from service: ", myString);
  }

}
