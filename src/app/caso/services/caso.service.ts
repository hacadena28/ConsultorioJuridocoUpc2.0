import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Caso } from 'src/app/login/interfaces/caso';
import { Cliente } from 'src/app/login/interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class CasoService {
  private urlBase = "https://localhost:44380/api";
  constructor(private http:HttpClient) { }

  agregarCaso(caso: Caso): Observable<Caso> {
    return this.http.post<Caso>(`${this.urlBase}/Caso`, caso)
  }
  
}
