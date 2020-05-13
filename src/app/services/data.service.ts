import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPosts():any{
    return this.http.get('http://127.0.0.1:8000/api/v1/charge?amount=3.33&currency=USD&source=tok_1GhSJqCLbb37u5arqT9Ybixi');
  }
}
