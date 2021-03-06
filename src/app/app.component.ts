import { Component, OnInit } from '@angular/core';
import { EquipoService,usuario } from './Servicio/equipo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'capiexamenfrontVictorHugoAcostaHernandez';

  Usuarios: usuario[] = [];
  constructor(private EquipoService:EquipoService) { }

  ngOnInit(): void {
    this.getusers();
    
  }

  getusers(){
    this.EquipoService.getall().subscribe(
      (res)=>{
        this.Usuarios=<any>res;
        console.log(res);
      },
      err => console.log(err)
    );
  }
}
