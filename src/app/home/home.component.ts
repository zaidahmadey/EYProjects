import { Component, OnInit } from '@angular/core';
import {ShoppingService} from '../shared/shopping.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ShoppingService]
})
export class HomeComponent implements OnInit {
public getProductListObj = []; 
  constructor(private serviceObj: ShoppingService) { }

  ngOnInit() {
    this.GetProductList();
  }
 GetProductList() {
  return this.serviceObj.GetHomePageProductList().
  subscribe(tempData => this.getProductListObj = tempData);
 }
}
