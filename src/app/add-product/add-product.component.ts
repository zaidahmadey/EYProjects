import { Component, OnInit } from '@angular/core';
import {AddProductModel} from '../models/addproduct.model';
import { ShoppingService} from '../shared/shopping.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers:[AddProductModel,ShoppingService],
})
export class AddProductComponent implements OnInit {

  constructor(public addProductModelObj:AddProductModel,public addServices:ShoppingService) { }

  ngOnInit() {
  }
SaveData(){
  debugger;
  var test=this.addProductModelObj.ProductName;
  var test2=this.addProductModelObj.Quantity;
  var test3=this.addProductModelObj.isActive;
  var body={
    test,test2,test3
  }
  this.addServices.SaveData(body);
}
}
