import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CasoService } from './services/caso.service';
import { RegistrarCasoComponent } from './pages/registrar-caso/registrar-caso.component';

@NgModule({
  declarations: [RegistrarCasoComponent],
  exports: [RegistrarCasoComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [CasoService],
})
export class CasoModule {}
