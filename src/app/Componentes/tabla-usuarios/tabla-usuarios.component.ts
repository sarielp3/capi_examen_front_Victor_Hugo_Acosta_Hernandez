import { Component, OnInit } from '@angular/core';
import { EquipoService,usuario } from '../../Servicio/equipo.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

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
