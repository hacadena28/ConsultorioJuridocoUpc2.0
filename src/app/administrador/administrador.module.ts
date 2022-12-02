import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AdminstradorService } from './services/adminstrador.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { ListaDocentesComponent } from './pages/lista-docentes/lista-docentes.component';
import { ListaEstudiantesComponent } from './pages/lista-estudiantes/lista-estudiantes.component';
import { ListaClientesComponent } from './pages/lista-clientes/lista-clientes.component';
import { ListasComponent } from './pages/listas/listas.component';
import { ListaCasosComponent } from './pages/lista-casos/lista-casos.component';
import { CasoModule } from "../caso/caso.module";



@NgModule({
    declarations: [
        PrincipalComponent,
        ListaUsuariosComponent,
        ListaDocentesComponent,
        ListaEstudiantesComponent,
        ListaClientesComponent,
        ListasComponent,
        ListaCasosComponent,
    ],
    exports: [
        PrincipalComponent
    ], providers: [
        AdminstradorService
    ],
    imports: [
        CommonModule, FormsModule, RouterModule,
        CasoModule,
    ]
})
export class AdministradorModule { }
