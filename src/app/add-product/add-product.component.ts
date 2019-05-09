import { Component, OnInit } from '@angular/core';
import {AddProductModel} from '../models/addproduct.model';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers:[AddProductModel],
})
export class AddProductComponent implements OnInit {

  constructor(public addProductModelObj:AddProductModel) { }

  ngOnInit() {
  }
SaveData(){
  var test=this.addProductModelObj.productName;
}
}
