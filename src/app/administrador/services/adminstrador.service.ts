import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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


  
  consultarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.urlBase}/Usuario`)
  }
  consultarDocentes(): Observable<Docente[]> {
    return this.http.get<Docente[]>(`${this.urlBase}/Docente`)
  }
  consultarEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(`${this.urlBase}/Estudiante`)
  }
  consultarCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.urlBase}/Cliente`)
  }
  consultarCasos(): Observable<Caso[]> {
    return this.http.get<Caso[]>(`${this.urlBase}/Caso`)
  }


}
