import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './administrador/pages/principal/principal.component';
import { RegistrarCasoComponent } from './caso/pages/registrar-caso/registrar-caso.component';
import { PrincipalClienteComponent } from './cliente/pages/principal-cliente/principal-cliente.component';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/pages/login/login.component';
import { RegistrarUsuarioComponent } from './login/pages/registrar-usuario/registrar-usuario.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent,
    pathMatch:"full",
  },
  {
    path:"registrarUsuario",
    component:RegistrarUsuarioComponent,
  },
  {
    path:"administradorPrincipal",
    component:PrincipalComponent,
  },
  {
    path:"clientePrincipal",
    component:PrincipalClienteComponent,
  },
  {
    path:"registrarCasos",
    component:RegistrarCasoComponent,
  },
  {
    path:"**",
    redirectTo:"",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),LoginModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
