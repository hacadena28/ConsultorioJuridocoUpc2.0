import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from '../interfaces/administrador';
import { Cliente } from '../interfaces/cliente';
import { Docente } from '../interfaces/docente';
import { Estudiante } from '../interfaces/estudiante';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlBase = "https://localhost:44380/api";


  constructor(private http: HttpClient) { }

//
  validarUsuario<Data>(usuario:Usuario):Observable<Usuario>{
    
    const url = `${this.urlBase}/Usuario/${usuario.correo.toLocaleLowerCase()}/correo`;
    console.log(usuario);
    
    return this.http.get<Usuario>(url);
  }
  validarId<Data>(usuario:Usuario):Observable<Usuario>{
    
    const url = `${this.urlBase}/Usuario/${usuario.idUsuario}/idUsuario`;
    
    return this.http.get<Usuario>(url);
  }

  registrarUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(`${this.urlBase}/Usuario`,usuario)
   
  }
  registrarAdministrador(administrador:Administrador):Observable<Administrador>{
    return this.http.post<Administrador>(`${this.urlBase}/Administrador`,administrador)
  }
  registrarEstudiante(estudiante:Estudiante):Observable<Estudiante>{
    return this.http.post<Estudiante>(`${this.urlBase}/Estudiante`,estudiante)
  }
  registrarDocente(docente:Docente):Observable<Docente>{
    return this.http.post<Docente>(`${this.urlBase}/Docente`,docente)
  }
  registrarCliente(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(`${this.urlBase}/Cliente`,cliente)
  }

  esEmailValido(email: string):boolean {
    let mailValido = false;
      'use strict';

      var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (email.match(EMAIL_REGEX)){
        mailValido = true;
      }
    return mailValido;
  }
 
}
