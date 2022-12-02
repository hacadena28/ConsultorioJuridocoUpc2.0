import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Caso } from 'src/app/login/interfaces/caso';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlBase = "https://localhost:44380/api";
  constructor(private http: HttpClient) { }
  consultarCasos(): Observable<Caso[]> {
    return this.http.get<Caso[]>(`${this.urlBase}/Caso`)
  }
}
