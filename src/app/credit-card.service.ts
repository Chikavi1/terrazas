import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  constructor( private http: HttpClient) { }


  getPosts(){
   console.log(this.http.get('https://jsonplaceholder.typicode.com/posts'));
   console.log('caca')
  }
}
