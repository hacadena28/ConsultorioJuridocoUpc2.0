import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Caso } from 'src/app/login/interfaces/caso';
import { Docente } from 'src/app/login/interfaces/docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  private urlBase = "https://localhost:44380/api";
  constructor(private http: HttpClient){}
  consultarCasos(): Observable<Caso[]>{
    return this.http.get<Caso[]>(`${this.urlBase}/Caso`)
    
  }
  consultarDocente<Data>(docente:Docente|number): Observable<Docente> {
    //  const idPersona = typeof persona ==='number' ? persona : persona.idPersona;
    console.log(docente)
      const url = `${this.urlBase}/Docente/${docente}`;
      return this.http.get<Docente>(url)
    }

    modificarDocente(docente: Docente): Observable<Docente> {
      console.log("Modificando final");
      
        return this.http.put<Docente>(`${this.urlBase}/Docente`, docente)
    }
    modificarCaso(caso: Caso): Observable<Caso> {
      console.log("Modificando final");
      
        return this.http.put<Caso>(`${this.urlBase}/Caso`, caso)
    }

}
