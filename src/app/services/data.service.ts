import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  DEVELOPMENT_URL = 'http://127.0.0.1:8000'
  constructor(private http: HttpClient) { }

  getTerraces():any{
    return this.http.get(this.DEVELOPMENT_URL+'/api/v1/getBussinesses');
  }

  getTerrace(id):any{
    return this.http.get(this.DEVELOPMENT_URL+'/api/v1/getBussiness/'+id);
  }

  verifiedReserve(day):any{
    return this.http.get(this.DEVELOPMENT_URL+'/api/v1/validateReserve/'+day);
  }

  getLocation(lat,lng):any{
    return this.http.get("https://api.mapbox.com/geocoding/v5/mapbox.places/proximity="+lng+","+lat+"&access_token=pk.eyJ1IjoiY2hpa2F2aSIsImEiOiJja2FrYXJ1MGswbjVoMnFuNnd3OGk5ZWU2In0.xNNeUVGQV2mRad823BhT7w");
  }
}
