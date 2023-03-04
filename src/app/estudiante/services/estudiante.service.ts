import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Caso } from 'src/app/login/interfaces/caso';
import { Estudiante } from 'src/app/login/interfaces/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private urlBase = "https://localhost:44380/api";

  constructor(private http:HttpClient) { }
  consultarCasos():Observable<Caso[]>{
    return this.http.get<Caso[]>(`${this.urlBase}/Caso`)
  }
  consultarEstudiante<Data>(estudiante:Estudiante|number): Observable<Estudiante> {
    //  const idPersona = typeof persona ==='number' ? persona : persona.idPersona;
    console.log(estudiante)
      const url = `${this.urlBase}/Estudiante/${estudiante}`;
      return this.http.get<Estudiante>(url)
    }
    modificarEstudiante(estudiante: Estudiante): Observable<Estudiante> {
      console.log("Modificando final");
      
        return this.http.put<Estudiante>(`${this.urlBase}/Estudiante`, estudiante)
    }
    modificarCaso(caso: Caso): Observable<Caso> {
      console.log("Modificando final");
      
        return this.http.put<Caso>(`${this.urlBase}/Caso`, caso)
    }

}
