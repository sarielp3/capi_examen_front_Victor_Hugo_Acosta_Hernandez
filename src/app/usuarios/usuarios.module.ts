import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from '.././app-routing.module';
import { TablaUsuariosComponent } from '.././Componentes/tabla-usuarios/tabla-usuarios.component';


@NgModule({
  declarations: [
    TablaUsuariosComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ]
})
export class UsuariosModule { }
