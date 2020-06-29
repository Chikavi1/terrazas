import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  PRODUCTION_URL = 'https://terrazas.tk'
  DEVELOPMENT_URL = 'http://127.0.0.1:8000'
  constructor(private http: HttpClient) { }

  getTerraces(latitude,longitude):any{
    return this.http.get(this.PRODUCTION_URL+'/api/v1/search?latitud='+latitude+'&longitud='+longitude);
  }
  getTerracesNormal():any{
    return this.http.get(this.PRODUCTION_URL+'/api/v1/getBussinesses/');
  }
  getTerrace(id):any{
    return this.http.get(this.PRODUCTION_URL+'/api/v1/getBussiness/'+id);
  }

  verifiedReserve(day,bussiness_id):any{
    console.log(this.PRODUCTION_URL+'/api/v1/validateReserve?bussiness_id='+bussiness_id+'&day='+day);
    return this.http.get(this.PRODUCTION_URL+'/api/v1/validateReserve?bussiness_id='+bussiness_id+'&day='+day);
  }
  getReserves(id):any{
    return this.http.get(this.PRODUCTION_URL+'/api/v1/getReserves/'+id);
  }

  createReservation(bussiness_id,user_id,price,day):any{
    return this.http.get(this.PRODUCTION_URL+'/api/v1/createReservation?bussiness_id='+bussiness_id+'&user_id='+user_id+'&price='+price+'&day='+day);
  }
  login(email,password):any{
    return this.http.post(this.PRODUCTION_URL+'/api/auth/login',{
      "email": email,
      "password": password,
    });
  }

  create_user(){
    return this.http.post(this.PRODUCTION_URL+'/api/auth/login',{
      "name": "prueba",
      "email": "chikavi2@hotmail.com",
      "password": "chikavi99",
      "password_confirmation": "chikavi99"
    });
  }

  get_user(token){
    var header = {
      headers: new HttpHeaders()
        .set('Content-Type','application/json')
        .set('Authorization',  `Bearer ${token}`)
    }

    return this.http.get(this.PRODUCTION_URL+'/api/auth/user',header);
  }

  logout(token):any{
    var header = {
      headers: new HttpHeaders()
        .set('Content-Type','application/json')
        .set('Authorization',  `Bearer ${token}`)
    }
    return this.http.get(this.PRODUCTION_URL+'/api/auth/logout',header);
  }

}
