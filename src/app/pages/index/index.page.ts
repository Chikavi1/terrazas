import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

   slideOpts = {
    slidesPerView: 1.7,
    spaceBetween:10 
  }

  slideOptslarge = {
    slidesPerView: 1.1,
    spaceBetween:10,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  }
  terraces:any;
  

show = false;
ciudad;
  constructor(private navCtrl: NavController,private dataService:DataService) {
    this.ciudad = localStorage.getItem('ciudad');
    setTimeout(()=>{
      this.show = true;
    },2500);

  }

  ngOnInit() {
    this.dataService.getTerraces().subscribe(
      data  => {
        this.terraces = data.data;
      }
    );
  }


  showTerrace(id){
    console.log(id);
    this.navCtrl.navigateForward(`/show/${id}`);
  }

  buscarCiudad(event){
    console.log(event.target.value);
  }
}
