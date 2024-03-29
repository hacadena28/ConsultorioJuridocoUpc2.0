import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Caso } from 'src/app/login/interfaces/caso';
import { Cliente } from 'src/app/login/interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlBase = "https://localhost:44380/api";
  constructor(private http: HttpClient) { }
  consultarCasos(): Observable<Caso[]> {
    return this.http.get<Caso[]>(`${this.urlBase}/Caso`)
  }


  consultarCliente<Data>(cliente:Cliente|number): Observable<Cliente> {
    //  const idPersona = typeof persona ==='number' ? persona : persona.idPersona;
    console.log(cliente)
      const url = `${this.urlBase}/Cliente/${cliente}`;
      return this.http.get<Cliente>(url)
    }
    // https://localhost:44380/api/Cliente
    modificarCliente(cliente: Cliente): Observable<Cliente> {
      console.log("Modificando final");
      
        return this.http.put<Cliente>(`${this.urlBase}/Cliente`, cliente)
    }
    modificarCaso(caso: Caso): Observable<Caso> {
      console.log("Modificando final");
      
        return this.http.put<Caso>(`${this.urlBase}/Caso`, caso)
    }
}
