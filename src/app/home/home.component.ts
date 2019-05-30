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
  return this.serviceObj.GetHomePageProductList().subscribe(
    res => this.getProductListObj=res);
    //console.log(res));
}
//this.addServices.GetCategory().subscribe(data => this.categoriesLocal = data);
}
///*
//this.myService.myFunction().subscribe(res=>
 //   this.myData = res['listResponse']['@attributes']['instance']
   //  )}*/