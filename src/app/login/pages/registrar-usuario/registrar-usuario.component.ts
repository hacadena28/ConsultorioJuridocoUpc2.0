import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Administrador } from '../../interfaces/administrador';
import { Cliente } from '../../interfaces/cliente';
import { Datos } from '../../interfaces/datos';
import { Docente } from '../../interfaces/docente';
import { Estudiante } from '../../interfaces/estudiante';
import { TipoDocumento } from '../../interfaces/tipoDocumento';
import { TipoUsuario } from '../../interfaces/tipoUsuario';
import { Usuario } from '../../interfaces/usuario';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css'],
})
export class RegistrarUsuarioComponent {
  constructor(private loginServices: LoginService, private router: Router) {}

  @Input() listaDocumentos: TipoDocumento[] = [
    {
      nombre: 'Cedula De Ciudadania',
    },
    {
      nombre: 'Tarjeta De Identidad',
    },
    {
      nombre: 'Cedula De Extrajero',
    },
  ];
  @Input() listaDeTiposDeUsuario: TipoUsuario[] = [
    {
      nombre: 'Administrador',
    },
    {
      nombre: 'Estudiante',
    },
    {
      nombre: 'Docente',
    },
    {
      nombre: 'Cliente',
    },
  ];
  @Input() TipoDeDocumento: TipoDocumento = {
    nombre: '',
  };
  @Input() TipoUsuario: TipoUsuario = {
    nombre: '',
  };
  @Input() datosRegistro: Datos = {
    cedula: '',
    tipoCedula1: '',
    tipoCedula2: '',
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    telefono: '',
    direccion: '',
    correo: '',
    tipoUsuario1: '',
    tipoUsuario2: '',
    contrasena: '',
    confirmarContrasena: '',
    facultad: '',
    semestre: '',
  };
  userLogin: Usuario = {
    idUsuario: 0,
    correo: '',
    contrasena: '',
    tipoUsuario: '',
  };
  administrador: Administrador = {
    idPersona: 0,
    primerNombre: '',
    primerApellido: '',
    segundoApellido: '',
    telefono: 0,
    direccion: '',
    correo: '',
    idAdministrador: 0,
  };
  docente: Docente = {
    idDocente: 0,
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    telefono: 0,
    direccion: '',
    correo: '',
    facultad: '',
    idPersona: 0,
  };
  estudiante: Estudiante = {
    idEstudiante: 0,
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    telefono: 0,
    direccion: '',
    correo: '',
    semestre: 0,
    estado: '',
    idPersona: 0,
  };
  cliente: Cliente = {
    idCliente: 0,
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    telefono: 0,
    direccion: '',
    correo: '',
    idPersona: 0,
  };
  usuario: Usuario = {
    idUsuario: 0,
    correo: '',
    contrasena: '',
    tipoUsuario: '',
  };

  registrar() {
    this.userLogin.correo = this.datosRegistro.correo
      ?.toString()
      .toLocaleLowerCase()!;
    this.userLogin.idUsuario = Number(this.datosRegistro.cedula);

    if (this.validarCampos()) {
      this.escogerRegistro();
    }
  }

  //TODO: Inicio validaciones
  validarCampos(): boolean {
    let respuesta: boolean = false;
    if (this.validarTipoDocumento()) {
      if (this.validarCampoCedula()) {
        if (this.validarPrimerNombre()) {
          if (this.validarSegundoNombre()) {
            if (this.validarPrimerApellido()) {
              if (this.validarSegundoApellido()) {
                if (this.validarCampoTelefono()) {
                  if (this.validarCampoDireccion()) {
                    if (this.validarCampoCorreo()) {
                      if (this.validarTipoUsuario()) {
                        if (this.validarContraseña()) {
                          respuesta = true;
                          //*ValidadoA
                        } else {
                          respuesta = false;
                        }
                      } else {
                        respuesta = false;
                      }
                    } else {
                      respuesta = false;
                    }
                  } else {
                    respuesta = false;
                  }
                } else {
                  respuesta = false;
                }
              } else {
                respuesta = false;
              }
            } else {
              respuesta = false;
            }
          } else {
            respuesta = false;
          }
        } else {
          respuesta = false;
        }
      } else {
        respuesta = false;
      }
    } else {
      respuesta = false;
    }
    return respuesta;
  }
  //TODO: FI validaciones

  validarTipoDocumento(): boolean {
    if (this.TipoDeDocumento.nombre == '') {
      window.alert('Seleccione un tipo de documento');
      return false;
    } else {
      return true;
    }
  }
  //*paso 1

  validarCampoCedula(): boolean {
    if (this.datosRegistro.cedula == '') {
      window.alert('Digite su numero de identidad');
      return false;
    } else if (
      Number(this.datosRegistro.cedula) <= 0 ||
      Number(this.datosRegistro.cedula) > 9999999999
    ) {
      window.alert('Numero de identidad fuera de rango');
      return false;
    } else {
      return true;
    }
  }
  //*paso 2
  validarPrimerNombre(): boolean {
    if (this.datosRegistro.primerNombre!.trim() == '') {
      window.alert('Digite su primer nombre');
      return false;
    } else {
      if (
        this.datosRegistro.primerNombre!.trim().length < 2 ||
        this.datosRegistro.primerNombre!.trim().length > 20
      ) {
        window.alert('Campo primer nombre fuera de rango');
        return false;
      } else {
        return true;
      }
    }
  }
  //*paso 3

  validarSegundoNombre(): boolean {
    if (this.datosRegistro.segundoNombre!.trim() != '') {
      if (
        this.datosRegistro.segundoNombre!.trim().length < 2 ||
        this.datosRegistro.segundoNombre!.trim().length > 20
      ) {
        window.alert('Campo segundo nombre fuera de rango');
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }
  //*paso 4

  validarPrimerApellido(): boolean {
    if (this.datosRegistro.primerApellido!.trim() == '') {
      window.alert('Digite su primer apellido');
      return false;
    } else {
      if (
        this.datosRegistro.primerApellido!.trim().length < 2 ||
        this.datosRegistro.primerApellido!.trim().length > 20
      ) {
        window.alert('Campo primer apellido fuera de rango');
        return false;
      } else {
        return true;
      }
    }
  }
  //*paso 5

  validarSegundoApellido(): boolean {
    if (this.datosRegistro.segundoApellido!.trim() == '') {
      window.alert('Digite su segundo apellido');
      return false;
    } else {
      if (
        this.datosRegistro.segundoApellido!.trim().length < 2 ||
        this.datosRegistro.segundoApellido!.trim().length > 20
      ) {
        window.alert('Campo segundo apellido fuera de rango');
        return false;
      } else {
        return true;
      }
    }
  }
  //*paso 6
  validarCampoTelefono(): boolean {
    if (this.datosRegistro.telefono == '') {
      window.alert('Digite su telefono');
      return false;
    } else if (
      Number(this.datosRegistro.telefono) < 1000000 ||
      Number(this.datosRegistro.telefono) > 9999999999
    ) {
      window.alert(
        'Numero de telefono fuera de rango 7-10 caracteres numericos'
      );
      return false;
    } else {
      return true;
    }
  }

  //*paso 7

  validarCampoDireccion(): boolean {
    if (this.datosRegistro.direccion!.trim() == '') {
      window.alert('Digite su direccion');
      return false;
    } else {
      if (
        this.datosRegistro.direccion!.trim().length < 2 ||
        this.datosRegistro.direccion!.trim().length > 25
      ) {
        window.alert('Campo direccion fuera de rango');
        return false;
      } else {
        return true;
      }
    }
  }

  //*paso 8

  validarCampoCorreo(): boolean {
    if (this.datosRegistro.correo!.trim().toLocaleLowerCase() == '') {
      window.alert('Digite su correo');
      return false;
    } else {
      if (
        this.datosRegistro.correo!.trim().toLocaleLowerCase().length < 10 ||
        this.datosRegistro.correo!.trim().toLocaleLowerCase().length > 40
      ) {
        window.alert('Campo correo fuera de rango');
        return false;
      } else {
        if(this.loginServices.esEmailValido(this.datosRegistro.correo!.trim().toLocaleLowerCase())){
        return true;
          
        }else{
        window.alert('El correo no cumple el formato');
          return false
        }
      }
    }
  }

  //*paso 9
  validarTipoUsuario(): boolean {
    if (this.TipoUsuario.nombre == '') {
      window.alert('Seleccione un tipo de Usuario');
      return false;
    } else {
      return true;
    }
  }

  //*paso 10

  validarContraseña(): boolean {
    if (this.datosRegistro.contrasena == '') {
      window.alert('Digite una contraseña');
      return false;
    } else if (this.datosRegistro.confirmarContrasena != '') {
      if (
        this.datosRegistro.confirmarContrasena != this.datosRegistro.contrasena
      ) {
        window.alert('Verificar contraseña');
        return false;
      } else {
        return true;
      }
    } else {
      window.alert('Digite denuevo su contraseña');
      return false;
    }
  }
  //*paso 11

  validarCampoSemestre(): boolean {
    console.log(this.datosRegistro);

    if (this.datosRegistro.semestre == '') {
      window.alert('Digite su semestre');
      return false;
    } else if (
      Number(this.datosRegistro.semestre) < 1 ||
      Number(this.datosRegistro.semestre) > 20
    ) {
      window.alert('Numero de semestre fuera de rango 1-20');
      return false;
    } else {
      return true;
    }
  }
  //*paso 12

  validarCampoFacultad(): boolean {
    if (this.datosRegistro.facultad!.trim() == '') {
      window.alert('Digite su facultad');
      return false;
    } else {
      if (
        this.datosRegistro.facultad!.trim().length < 2 ||
        this.datosRegistro.facultad!.trim().length > 30
      ) {
        window.alert('Campo facultad fuera de rango');
        return false;
      } else {
        return true;
      }
    }
  }
  //*paso 13

  escogerRegistro() {
    if (this.TipoUsuario.nombre == 'Administrador') {
      this.registrarAdministrador();
      console.log('registrando Administrador');
    } else if (this.TipoUsuario.nombre == 'Estudiante') {
      if (this.validarCampoSemestre()) {
        this.registrarEstudiantes();
        console.log('registrando estudiantes');
      }
    } else if (this.TipoUsuario.nombre == 'Docente') {
      if (this.validarCampoFacultad()) {
        this.registrarDocente();
        console.log('registrando docente');
      }
    } else if (this.TipoUsuario.nombre == 'Cliente') {
      this.registrarCliente();
      console.log('registrando cliente');
    } else {
      window.alert('Seleccione un tipo de usuario');
    }
  }
  //*paso 14

  //-------------------
  registrarAdministrador() {
    this.usuario.idUsuario = Number(this.datosRegistro.cedula);
    this.usuario.correo = this.datosRegistro.correo!;
    this.usuario.contrasena = this.datosRegistro.contrasena!;
    this.usuario.tipoUsuario = 'Administrador';
    try {
      this.loginServices.registrarUsuario(this.usuario).subscribe((usuario) => {
        if (usuario != null) {
          // window.alert('Usuario Administrador registrado correctamente');
          this.administrador.idPersona = Number(this.datosRegistro.cedula);
          this.administrador.primerNombre = this.datosRegistro.primerNombre!;
          this.administrador.segundoNombre = this.datosRegistro.segundoNombre!;
          this.administrador.primerApellido =
            this.datosRegistro.primerApellido!;
          this.administrador.segundoApellido =
            this.datosRegistro.segundoApellido!;
          this.administrador.telefono = Number(this.datosRegistro.telefono);
          this.administrador.direccion = this.datosRegistro.direccion!;
          this.administrador.correo = this.datosRegistro.correo!;
          this.administrador.idAdministrador = Number(
            this.datosRegistro.cedula
          );
          console.log(usuario);

          try {
            this.loginServices
              .registrarAdministrador(this.administrador)
              .subscribe((administrador) => {
                if (administrador != null) {
                  // window.alert(
                  //   'Datos Del Administrador guardados correctamente'
                  // );

                  this.router.navigateByUrl('');
                  console.log(administrador);
                } else {
                  console.log('Id ya registrado');
                  window.alert('Id ya registrado');
                }
              });
          } catch (error) {
            window.alert(error);
            window.alert('Datos del administrador no se pueden guardar');
          }
        } else {
          console.log('error paso 2 ');

          console.log('Id user ya registrada');
        }
      });
    } catch (error) {
      console.log('error paso 1');
      console.log(error);

      window.alert('Datos del usuario administrador no se pueden guardar');
      window.alert(error);
    }
  }
  registrarDocente() {
    this.usuario.idUsuario = Number(this.datosRegistro.cedula);
    this.usuario.correo = this.datosRegistro.correo!;
    this.usuario.contrasena = this.datosRegistro.contrasena!;
    this.usuario.tipoUsuario = 'Docente';
    try {
      this.loginServices.registrarUsuario(this.usuario).subscribe((usuario) => {
        if (usuario != null) {
          // window.alert('Usuario Docente registrado correctamente');
          this.docente.idPersona = Number(this.datosRegistro.cedula);
          this.docente.primerNombre = this.datosRegistro.primerNombre!;
          this.docente.segundoNombre = this.datosRegistro.segundoNombre!;
          this.docente.primerApellido = this.datosRegistro.primerApellido!;
          this.docente.segundoApellido = this.datosRegistro.segundoApellido!;
          this.docente.telefono = Number(this.datosRegistro.telefono);
          this.docente.direccion = this.datosRegistro.direccion!;
          this.docente.correo = this.datosRegistro.correo!;
          this.docente.idDocente = Number(this.datosRegistro.cedula);
          this.docente.facultad = this.datosRegistro.facultad!;
          console.log(usuario);

          try {
            this.loginServices
              .registrarDocente(this.docente)
              .subscribe((docente) => {
                if (docente != null) {
                  // window.alert('Datos Del Docente guardados correctamente');
                  this.router.navigateByUrl('');
                  console.log(docente);
                } else {
                  window.alert("Id ya registrado")
                }
              });
          } catch (error) {
            window.alert(error);
            window.alert('Datos del Docente no se pueden guardar');
          }
        } else {
        }
      });
    } catch (error) {
      console.log('error paso 1');
      console.log(error);

      window.alert('Datos del usuario Docente no se pueden guardar');
      window.alert(error);
    }
  }
  registrarEstudiantes() {
    this.usuario.idUsuario = Number(this.datosRegistro.cedula);
    this.usuario.correo = this.datosRegistro.correo!;
    this.usuario.contrasena = this.datosRegistro.contrasena!;
    this.usuario.tipoUsuario = 'Estudiante';
    try {
      this.loginServices.registrarUsuario(this.usuario).subscribe((usuario) => {
        if (usuario != null) {
          // window.alert('Usuario Estudiante registrado correctamente');
          this.estudiante.idPersona = Number(this.datosRegistro.cedula);
          this.estudiante.primerNombre = this.datosRegistro.primerNombre!;
          this.estudiante.segundoNombre = this.datosRegistro.segundoNombre!;
          this.estudiante.primerApellido = this.datosRegistro.primerApellido!;
          this.estudiante.segundoApellido = this.datosRegistro.segundoApellido!;
          this.estudiante.telefono = Number(this.datosRegistro.telefono);
          this.estudiante.direccion = this.datosRegistro.direccion!;
          this.estudiante.correo = this.datosRegistro.correo!;
          this.estudiante.idEstudiante = Number(this.datosRegistro.cedula);
          this.estudiante.semestre = Number(this.datosRegistro.semestre!);
          this.estudiante.estado = 'Registrado';
          console.log(usuario);

          try {
            this.loginServices
              .registrarEstudiante(this.estudiante)
              .subscribe((estudiante) => {
                if (estudiante != null) {
                  // window.alert('Datos Del Estudiante guardados correctamente');
                  this.router.navigateByUrl('');
                  console.log(estudiante);
                } else {
                  console.log('Id ya registrado');
                  window.alert('Id ya registrado');
                }
              });
          } catch (error) {
            window.alert(error);
            window.alert('Datos del Estudiante no se pueden guardar');
          }
        } else {
          console.log('error paso 2 ');

          console.log('Id user ya registrada');
        }
      });
    } catch (error) {
      console.log('error paso 1');
      console.log(error);

      window.alert('Datos del usuario Estudiante no se pueden guardar');
      window.alert(error);
    }
  }
  registrarCliente() {
    this.usuario.idUsuario = Number(this.datosRegistro.cedula);
    this.usuario.correo = this.datosRegistro.correo!;
    this.usuario.contrasena = this.datosRegistro.contrasena!;
    this.usuario.tipoUsuario = 'Cliente';
    try {
      this.loginServices.registrarUsuario(this.usuario).subscribe((usuario) => {
        if (usuario != null) {
          // window.alert('Usuario Cliente registrado correctamente');
          this.cliente.idPersona = Number(this.datosRegistro.cedula);
          this.cliente.primerNombre = this.datosRegistro.primerNombre!;
          this.cliente.segundoNombre = this.datosRegistro.segundoNombre!;
          this.cliente.primerApellido = this.datosRegistro.primerApellido!;
          this.cliente.segundoApellido = this.datosRegistro.segundoApellido!;
          this.cliente.telefono = Number(this.datosRegistro.telefono);
          this.cliente.direccion = this.datosRegistro.direccion!;
          this.cliente.correo = this.datosRegistro.correo!;
          this.cliente.idCliente = Number(this.datosRegistro.cedula);
          console.log(usuario);

          try {
            this.loginServices
              .registrarCliente(this.cliente)
              .subscribe((cliente) => {
                if (cliente != null) {
                  // window.alert('Datos Del Cliente guardados correctamente');
                  this.router.navigateByUrl('');
                  console.log(cliente);
                } else {
                  console.log('Id ya registrado');
                  window.alert('Id ya registrado');
                }
              });
          } catch (error) {
            window.alert(error);
            window.alert('Datos del Cliente no se pueden guardar');
          }
        } else {
          console.log('error paso 2 ');

          console.log('Id user ya registrada');
        }
      });
    } catch (error) {
      console.log('error paso 1');
      console.log(error);

      window.alert('Datos del usuario cliente no se pueden guardar');
      window.alert(error);
    }
  }

  
  registrarUsuario() {}

  limpiarDatos() {
    this.datosRegistro = {
      cedula: '',
      tipoCedula1: '',
      tipoCedula2: '',
      primerNombre: '',
      segundoNombre: '',
      primerApellido: '',
      segundoApellido: '',
      telefono: '',
      direccion: '',
      correo: '',
      tipoUsuario1: '',
      tipoUsuario2: '',
      contrasena: '',
      confirmarContrasena: '',
      facultad: '',
      semestre: '',
    };

    this.usuario = {
      idUsuario: 0,
      correo: '',
      contrasena: '',
      tipoUsuario: '',
    };
    this.TipoDeDocumento.nombre = '';
    this.TipoUsuario.nombre = '';
    this.administrador = {
      idPersona: 0,
      primerNombre: '',
      primerApellido: '',
      segundoApellido: '',
      telefono: 0,
      direccion: '',
      correo: '',
      idAdministrador: 0,
    };
    this.docente = {
      idDocente: 0,
      primerNombre: '',
      segundoNombre: '',
      primerApellido: '',
      segundoApellido: '',
      telefono: 0,
      direccion: '',
      correo: '',
      facultad: '',
      idPersona: 0,
    };
    this.estudiante = {
      idEstudiante: 0,
      primerNombre: '',
      segundoNombre: '',
      primerApellido: '',
      segundoApellido: '',
      telefono: 0,
      direccion: '',
      correo: '',
      semestre: 0,
      estado: '',
      idPersona: 0,
    };
    this.cliente = {
      idCliente: 0,
      primerNombre: '',
      segundoNombre: '',
      primerApellido: '',
      segundoApellido: '',
      telefono: 0,
      direccion: '',
      correo: '',
      idPersona: 0,
    };
  }
}
