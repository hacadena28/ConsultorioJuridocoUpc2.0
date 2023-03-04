import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalDocenteComponent } from './pages/docente/principal-docente/principal-docente.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CasoModule } from '../caso/caso.module';
import { AdministradorModule } from '../administrador/administrador.module';
import { DocenteService } from './services/docente.service';

@NgModule({
  declarations: [PrincipalDocenteComponent],
  exports: [PrincipalDocenteComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CasoModule,
    AdministradorModule,
  ],
  providers: [DocenteService],
})
export class DocenteModule {}
