import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { windowWhen } from 'rxjs';
import { Usuario } from '../../interfaces/usuario';
import { LoginService } from '../../services/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private urlBase = 'https://localhost:44380/api/Usuario';

  constructor(private loginServices: LoginService, private router: Router) {}
  resultado!: string;

  formularioContacto = new FormGroup({
    correo: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(10),
      Validators.maxLength(40),
    ]),
    contrasena: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(30),
    ]),
  });
  submit() {
    if (this.formularioContacto.valid)
      this.resultado = 'Todos los datos son válidos';
    else this.resultado = 'Hay datos inválidos en el formulario';
  }

  @Input() userLogin: Usuario = {
    idUsuario: 0,
    correo: '',
    contrasena: '',
    tipoUsuario: '',
  };

  validarUsuarioLogin() {
    if (this.userLogin.correo.trim().length === 0) {
      window.alert('Digite su correo');

      return;
    } else if (this.userLogin.contrasena.trim().length === 0) {
      window.alert('Digite su contraseña');

      return;
    } else {
      try {
        this.loginServices
          .validarUsuario(this.userLogin)
          .subscribe((result) => {
            if (result === null) {
              window.alert('Usuario no esta registrado');
            } else if (result.contrasena != '') {
              if (result.contrasena === this.userLogin.contrasena) {
                this.userLogin = result;

                if (result.tipoUsuario === 'Administrador') {
                  console.log(result);
                  this.router.navigateByUrl('administradorPrincipal');
                } else if (result.tipoUsuario === 'Estudiante') {
                  console.log(result);
                  this.router.navigateByUrl(
                    'estudiantePrincipal/' + this.userLogin.idUsuario
                  );
                } else if (result.tipoUsuario === 'Docente') {
                  console.log(result);
                  this.router.navigateByUrl(
                    'docentePrincipal/' + this.userLogin.idUsuario
                  );
                } else if (result.tipoUsuario === 'Cliente') {
                  console.log(result);
                  this.router.navigateByUrl(
                    'clientePrincipal/' + this.userLogin.idUsuario
                  );
                } else {
                  window.alert('Tipo de usuario no valido');
                }
                this.userLogin = {
                  idUsuario: 0,
                  correo: '',
                  contrasena: '',
                  tipoUsuario: '',
                };
              } else {
                window.alert('Credenciales Incorrecta');
              }
            }
          });
      } catch {
        window.alert('Error al consultar');
      }
    }
  }
}
