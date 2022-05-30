import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TablaUsuariosComponent } from './Componentes/tabla-usuarios/tabla-usuarios.component';

const routes: Routes = [
  { path:'',redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio', component:TablaUsuariosComponent}
  
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
