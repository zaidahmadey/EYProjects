import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {AddProductComponent} from '../app/add-product/add-product.component';
const routes: Routes = [
  { path: 'home',
    component: HomeComponent
  },
  {
    path: 'addproduct',
    component: AddProductComponent
  },
  { path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
