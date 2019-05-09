import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import {HttpClient} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
