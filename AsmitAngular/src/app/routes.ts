import {Routes} from '@angular/router'
import { ShopingHomePageComponent } from './shoping-home-page/shoping-home-page.component';
import {ShopingProductMasterComponent} from './shoping-product-master/shoping-product-master.component';

export const appRoutes : Routes=[
    {path:'home',component:ShopingHomePageComponent},
    {path:'ShopingProductMasterComponent', component:ShopingProductMasterComponent},
    {path: '', redirectTo:'/home',pathMatch:'full'}
];




