import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
 
  constructor(private dataService: DataService) { }

  ngOnInit() {
     this.dataService.getPosts().subscribe(posts => console.log(posts));
  }
  
  
}
