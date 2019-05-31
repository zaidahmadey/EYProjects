import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Form, NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ShoppingWorld {
//----------------Properties------------------------------

readonly rootUrl='http://localhost:60817/';
qns:any[];
seconds:number;
timer;
qnProgress:number;
//----------------Helper Methods------------------------------



  constructor(private http:HttpClient) { }

insertParticipant(name:string, email:string)
{
  var body=
  {
    Name:name,
    Email:email
  }
  return this.http.post(this.rootUrl + '/api/InsertParticipant',body);
}
insertProduct(body:any)
{
 
 // console.log(body);
  return this.http.post(this.rootUrl + '/api/InsertProduct',body);
}
getQuestions(){
  return this.http.get(this.rootUrl + '/api/Questions');
}
displayTimeElapsed()
{
  return Math.floor(this.seconds/3600) + ':' + Math.floor(this.seconds/60) + ':' + Math.floor(this.seconds % 60)
}
  //----------------Http Methods------------------------------



  GetProductList(){
    debugger;
var body={};
  //return this.http.get(this.rootUrl + '/api/GetProduct');
 // return this.http.get(this.rootUrl + '/api/GetProduct's);
 // return this.http.get(this.rootUrl + '/api/Questions');
 var url=this.rootUrl + 'api/GetProduct';
 console.log(url);
  return this.http.get(url);
  }

}
