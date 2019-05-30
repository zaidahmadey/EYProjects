import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categories } from '../models/categories';
import { ReturnResponse } from '../models/returnresponse';
import { HomeModel } from '../models/home';
@Injectable({
  providedIn: 'root'
})


export class ShoppingService {
 
  private baseUrl = 'http://localhost:5000/api/';
 
  constructor(private httpObj: HttpClient) { }

  SaveData(formData): Observable<ReturnResponse[]> {
    const proxyOptions = {
      headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      },
     };
    console.log(formData);
    return this.httpObj.post<ReturnResponse[]>('http://localhost:5000/api/Products/InsertProduct', formData, proxyOptions);
  }

GetCategory(): Observable<Categories[]> {
  const proxyOptions = {
    headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'UserName': 'ZaidAHmad'
    },
   };
  return this.httpObj.get<Categories[]>(this.baseUrl + 'category/GetAll', proxyOptions);
}

GetHomePageProductList(): Observable<HomeModel[]> {
  const proxyOptions = {
    headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    },
   };
  return this.httpObj.get<HomeModel[]>(this.baseUrl + 'Products/GetProduct', proxyOptions);
}
}


