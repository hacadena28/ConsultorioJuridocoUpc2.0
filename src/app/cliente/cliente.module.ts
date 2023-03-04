import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrincipalClienteComponent } from './pages/principal-cliente/principal-cliente.component';
import { ClienteService } from './services/cliente.service';
import { CasoModule } from '../caso/caso.module';
import { AdministradorModule } from '../administrador/administrador.module';
import { EditarClienteComponent } from './pages/editar-cliente/editar-cliente.component';



@NgModule({
  declarations: [
    PrincipalClienteComponent,
    EditarClienteComponent
  ],
  exports:[PrincipalClienteComponent],
  imports: [
    CommonModule,FormsModule,RouterModule,CasoModule,AdministradorModule
  ],providers:[
    ClienteService
  ]
})
export class ClienteModule { }
