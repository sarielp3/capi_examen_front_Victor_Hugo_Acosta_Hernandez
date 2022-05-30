import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private http: HttpClient) { }

  getall(): Observable<any>{
    return this.http.get<any>('http://127.0.0.1:8000/api/inicio');

  }
}

export interface usuario{
  user_id?:Number,
  domicilio?:string,
  numero_exterior?:string,
  colonia?:string,
  cp?:string,
  ciudad?:string,
  nom_usuario?:string,
  fecha_nacimiento?:string,
  edad?:string

}