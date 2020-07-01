import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  terraces:any;

  constructor(public dataService:DataService){
    this.dataService.getTerracesNormal().subscribe(
      data => {
       this.terraces = data.data;
       console.log(data.data);
      })
  }


  onCancel(e){
   this.terraces = [];
  }

  buscarCiudad(e){
    if(e.target.value.length > 4){
      console.log(e.target.value);
      this.dataService.search(e.target.value).subscribe(
        data => {
         this.terraces = data.data.data;
         console.log(data.data.data);
        })
    }
  }

}
