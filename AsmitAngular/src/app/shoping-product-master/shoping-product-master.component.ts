import { Component, OnInit } from '@angular/core';
import { ShoppingWorld } from '../shared/shopingworld.service';
import { Router } from '@angular/router';
import {ProductsModel} from '../models/products.model';

@Component({
  selector: 'app-shoping-product-master',
  templateUrl: './shoping-product-master.component.html',
  styleUrls: ['./shoping-product-master.component.css'],
  providers:[ShoppingWorld,ProductsModel]
})
export class ShopingProductMasterComponent implements OnInit {
  constructor(public productMasterObj:ProductsModel,public shoppingworld: ShoppingWorld, public route:Router) { }

  ngOnInit() {
    //this.productMasterObj.ProductName;
  }
  base64textString : string;
  getFiles(evt) {
    debugger;
    const file = evt.target.files[0];

    if (file) {
      const reader = new FileReader();
  
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
}

handleReaderLoaded(e) {
  
  //'data:image/png;base64,' 
  this.base64textString=btoa(e.target.result);
  console.log(this.base64textString);
}

 // OnSubmit(ProductName :string, QuantityPerUnit :string,UnitPrice :string, UnitsInStock :string,UnitsOnOrder :string, ReorderLevel :string,Discontinued :string, ProductImage :string) 
 OnSubmit() 
    { 
      debugger;
     //var ProductrImahe=forms.value['ProductImage'];

      var body=
      {
        productname:this.productMasterObj.ProductName,
        quantityperunit:this.productMasterObj.QuantityPerUnit,
        unitprice:this.productMasterObj.UnitPrice,
        unitsinstock:this.productMasterObj.UnitsInStock,
        unitsonorder:this.productMasterObj.UnitsOnOrder,
        reorderlevel:this.productMasterObj.ReorderLevel,
        discontinues:this.productMasterObj.Discontinued,
        ProductImage:this.base64textString        
      };
   this.shoppingworld.insertProduct(body).subscribe((data: any) => {
     localStorage.clear();
     localStorage.setItem('product',JSON.stringify(data));
    this.route.navigate(['/home'])
   }
   );

 }


}
