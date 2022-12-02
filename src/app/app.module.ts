import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LoginModule } from './login/login.module';
import { RegistrarUsuarioComponent } from './login/pages/registrar-usuario/registrar-usuario.component';
import { AdministradorModule } from './administrador/administrador.module';
import { RegistrarCasoComponent } from './caso/pages/registrar-caso/registrar-caso.component';
import { CasoModule } from './caso/caso.module';
import { ClienteModule } from './cliente/cliente.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LoginModule,
    AdministradorModule,
    CasoModule,ClienteModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
