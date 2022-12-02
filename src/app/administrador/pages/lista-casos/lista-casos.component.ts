import { Component, Input } from '@angular/core';
import { Caso } from 'src/app/login/interfaces/caso';
import { AdminstradorService } from '../../services/adminstrador.service';

@Component({
  selector: 'app-lista-casos',
  templateUrl: './lista-casos.component.html',
  styleUrls: ['./lista-casos.component.css']
})
export class ListaCasosComponent {
  constructor(private administradorService: AdminstradorService){

  }
  @Input() casosConsulta :Caso[] = [];
   
   get casosConsultados(){
    return this.casosConsulta
  }
  ngOnInit(): void {
    try {
      this.administradorService.consultarCasos().subscribe((result) => {
        this.casosConsulta = result;
      });
    } catch {
      window.alert("Error al conectar con el servidor");
    } 
  }
}
