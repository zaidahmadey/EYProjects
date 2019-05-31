import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {ShoppingWorld} from './shared/shopingworld.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ShoppingWorld]
})
export class AppComponent {
  constructor(public route:Router,public shopmasterObj:ShoppingWorld  ){

  }
  title = 'ShoppingWorld';

  LoadMaster(){
    debugger;
    var list=this.shopmasterObj.GetProductList();
    console.log(list);
  // this.route.navigate(['/ShoppingMaster'])
  }
}
