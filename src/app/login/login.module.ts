import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegistrarUsuarioComponent } from './pages/registrar-usuario/registrar-usuario.component';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [LoginComponent,RegistrarUsuarioComponent],
  exports: [LoginComponent],
  imports: [CommonModule,FormsModule,RouterModule],
  providers:[LoginService]
})
export class LoginModule {}
