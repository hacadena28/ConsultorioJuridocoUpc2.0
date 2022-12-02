import { Component, Input } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private urlBase = 'https://localhost:44380/api/Usuario';

  constructor(private loginServices: LoginService) {}
  @Input() userLogin: Usuario = {
    idUsuario: 0,
    correo: '',
    contrasena: '',
    tipoUsuario: '',
  };

  validarUsuario() {
    
      if (this.userLogin.correo.trim().length === 0) {
        window.alert('Digite su correo');

        return;
      }else if (this.userLogin.contrasena.trim().length === 0) {
        window.alert('Digite su contraseña');

        return;
      }
      try {
      this.loginServices.validarUsuario(this.userLogin).subscribe((result) => {
        if(result===null){
          window.alert('Usuario no esta registrado');

        }else if(result.contrasena!=""){
          if (result.contrasena === this.userLogin.contrasena) {

            this.userLogin = result;
            
            console.log('init userLogin');
            console.log(this.userLogin);
            console.log('fin userLogin');
            console.log('init reult');
            console.log(result);
            console.log('fin uresult');
            this.userLogin = {
              idUsuario: 0,
              correo: '',
              contrasena: '',
              tipoUsuario: '',
            };
            window.alert('Datos consultados correctamente');
            
          }else{
            window.alert('Contraseña Incorrecta');
            
          }
        }
        
      });
    } catch {
      window.alert('Error al consultar');
    }
  }
}
