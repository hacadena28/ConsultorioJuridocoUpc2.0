import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalEstudianteComponent } from './pages/estudiante/principal-estudiante/principal-estudiante.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CasoModule } from '../caso/caso.module';
import { AdministradorModule } from '../administrador/administrador.module';
import { EstudianteService } from './services/estudiante.service';

@NgModule({
  declarations: [PrincipalEstudianteComponent],
  exports: [PrincipalEstudianteComponent],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CasoModule,
    AdministradorModule,
  ],
  providers: [EstudianteService],
})
export class EstudianteModule {}
