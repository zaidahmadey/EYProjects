import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor() { }

  SaveData(test){
     console.log(test);
  }
}


