import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { ShopingHomePageComponent } from './shoping-home-page/shoping-home-page.component';

import { CreateProductComponent } from './models/create-product/create-product.component';

import { appRoutes } from './routes';
import {HttpClientModule} from '@angular/common/http';
import { ShoppingWorld } from './shared/shopingworld.service';
import { ShopingProductMasterComponent } from './shoping-product-master/shoping-product-master.component';
@NgModule({
  declarations: [
    AppComponent,
    ShopingHomePageComponent,    
    CreateProductComponent,
    ShopingProductMasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
   FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
