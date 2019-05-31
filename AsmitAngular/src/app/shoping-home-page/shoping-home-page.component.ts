import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductsListModel} from '../models/productlist.model';
import {ShoppingWorld} from '../shared/shopingworld.service';
//import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shoping-home-page',
  templateUrl: './shoping-home-page.component.html',
  styleUrls: ['./shoping-home-page.component.css'],
  providers:[ProductsListModel,ShoppingWorld]
})
export class ShopingHomePageComponent implements OnInit {

  constructor(private route:Router,private serviceObj:ShoppingWorld,public productListObj:ProductsListModel) { }

  ngOnInit() {
    
  }
  ShoppingMaster() {
    debugger;
    //var localProObjList=[];
    var localProObjList=this.serviceObj.GetProductList();
    console.log(localProObjList);
    //clearInterval(this.quizService.timer);
    this.route.navigate(['/ShoppingMaster']);
   // this.route.navigate(['/quiz'])
  }
}
