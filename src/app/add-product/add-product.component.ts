import { Component, OnInit } from '@angular/core';
import {AddProductModel} from '../models/addproduct.model';
import { ShoppingService} from '../shared/shopping.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [AddProductModel, ShoppingService],
})
export class AddProductComponent implements OnInit {
  public categoriesLocal = [];
  public returnResponses = [];
public base64textString = '';
public selectedItemID: Int32Array;

  constructor(  public addProductModelObj: AddProductModel, public addServices: ShoppingService) { }

  ngOnInit() {
  this.GetCategory();
  }
  onUploadChange(evt: any, selectedItemValue) {
    this.addProductModelObj.CategoryID = selectedItemValue;
    const file = evt.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  handleReaderLoaded(e) {
    this.base64textString = btoa(e.target.result);
    console.log(this.base64textString);
  }
  onChange(getselectedItem) {
    this.addProductModelObj.CategoryID = getselectedItem;
    this.selectedItemID = getselectedItem;
  }
 SaveData() {
   this.addProductModelObj.imagePath = this.base64textString;
   var body = {
  ProductName: this.addProductModelObj.ProductName,
  CategoryId: this.selectedItemID,
  QuantityPerUnit: this.addProductModelObj.QuantityPerUnit,
  UnitPrice: this.addProductModelObj.UnitPrice,
  UnitsInStock: this.addProductModelObj.UnitsOnOrder,
  UnitsOnOrder: this.addProductModelObj.UnitsOnOrder,
  imagePath: this.addProductModelObj.imagePath,
  ReorderLevel: this.addProductModelObj.ReorderLevel,
  Discontinued: this.addProductModelObj.Discontinued
};
   this.addServices.SaveData(body).subscribe(temData => this.returnResponses = temData);
 }

  handleError(handleError: any) {
    throw new Error('Exception Found Please handle on your own ways');
  }

  GetCategory() {
    this.addServices.GetCategory().subscribe(data => this.categoriesLocal = data);
  }
}
