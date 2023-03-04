import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from 'src/app/login/interfaces/administrador';
import { Caso } from 'src/app/login/interfaces/caso';
import { Cliente } from 'src/app/login/interfaces/cliente';
import { Docente } from 'src/app/login/interfaces/docente';
import { Estudiante } from 'src/app/login/interfaces/estudiante';
import { Usuario } from 'src/app/login/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class AdminstradorService {
  private urlBase = "https://localhost:44380/api";

  constructor(private http: HttpClient) { }

//!Administrador


  //Todo Eliminar
  deleteAdministrador(administrador:Administrador|number): Observable<Administrador> {
    const idAdministrador = typeof administrador ==='number' ? administrador : administrador.idAdministrador;
    const url = `${this.urlBase}/Administrador/${idAdministrador}`;
    return this.http.delete<Administrador>(url )
  }


//!Usuario
  //Todo Consulta
  consultarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.urlBase}/Usuario`)
  }
 //Todo Eliminar UNico
 deleteUsuarioPeticion(usuario:Usuario|number): Observable<Usuario> {
  const idUsuario = typeof usuario ==='number' ? usuario : usuario.idUsuario;
  const url = `${this.urlBase}/Usuario/${idUsuario}`;
  return this.http.delete<Usuario>(url )
}


  //Todo Eliminar
  deleteUsuario(usuario:Usuario|number,tipoUsuario:string): Observable<Usuario> {
    const idUsuario = typeof usuario ==='number' ? usuario : usuario.idUsuario;
    const url = `${this.urlBase}/Usuario/${idUsuario}`;
    if(tipoUsuario == "Administrador"){
      try {
        this.deleteAdministrador(idUsuario).subscribe((result) => {
          console.log("eliminado");
          window.location.reload();
        });
      } catch {
        window.alert("Errror al borrar");
      }
     
    }else if(tipoUsuario == "Estudiante"){

      try {
        this.deleteEstudiante(idUsuario).subscribe((result) => {
          console.log("eliminado");
          window.location.reload();
        });
      } catch {
        window.alert("Errror al borrar");
      }

    }else if ( tipoUsuario == "Docente"){
      try {
        this.deleteDocente(idUsuario).subscribe((result) => {
          console.log("eliminado");
          window.location.reload();
        });
      } catch {
        window.alert("Errror al borrar");
      }

    }else if ( tipoUsuario == "Cliente"){
      try {
        this.deleteCliente(idUsuario).subscribe((result) => {
          console.log("eliminado");
          window.location.reload();
        });
      } catch {
        window.alert("Errror al borrar");
      }
    }else{

      console.log("No se encontro el tipo de usuario para eliminar ");
      
    }
    return this.http.delete<Usuario>(url )
  }


//!Docente
 //Todo Consulta
  consultarDocentes(): Observable<Docente[]> {
    return this.http.get<Docente[]>(`${this.urlBase}/Docente`)
  }
    //Todo Eliminar
    deleteDocente(docente:Docente|number): Observable<Docente> {
      const idDocente = typeof docente ==='number' ? docente : docente.idDocente;
      const url = `${this.urlBase}/Docente/${idDocente}`;
      return this.http.delete<Docente>(url )
    }

  //!Estudiante

  //todo Consulta
  consultarEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(`${this.urlBase}/Estudiante`)
  }
  
    //Todo Eliminar
    deleteEstudiante(estudiante:Estudiante|number): Observable<Estudiante> {
      const idEstudiante = typeof estudiante ==='number' ? estudiante : estudiante.idEstudiante;
      const url = `${this.urlBase}/Estudiante/${idEstudiante}`;
      return this.http.delete<Estudiante>(url )
    }

  //!CLiente
  //todo Consulta
  consultarCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.urlBase}/Cliente`)
  }
  
    //Todo Eliminar
    deleteCliente(cliente:Cliente|number): Observable<Cliente> {
      const idCliente = typeof cliente ==='number' ? cliente : cliente.idCliente;
      const url = `${this.urlBase}/Cliente/${idCliente}`;
      return this.http.delete<Cliente>(url )
    }

  //!Caso
  //todo Consulta
  consultarCasos(): Observable<Caso[]> {
    return this.http.get<Caso[]>(`${this.urlBase}/Caso`)
  }
  
    //Todo Eliminar
    deleteCaso(caso:Caso|number): Observable<Caso> {
      const idCaso = typeof caso ==='number' ? caso : caso.idCaso;
      const url = `${this.urlBase}/Caso/${idCaso}`;
      return this.http.delete<Caso>(url )
    }


}
