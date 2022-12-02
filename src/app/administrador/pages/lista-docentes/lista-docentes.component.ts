import { Component, Input } from '@angular/core';
import { Docente } from 'src/app/login/interfaces/docente';
import { AdminstradorService } from '../../services/adminstrador.service';

@Component({
  selector: 'app-lista-docentes',
  templateUrl: './lista-docentes.component.html',
  styleUrls: ['./lista-docentes.component.css']
})
export class ListaDocentesComponent {
  constructor(private administradorService: AdminstradorService){

  }
  @Input() docentesConsulta :Docente[] = [];
   
   get docentesConsultados(){
    return this.docentesConsulta
  }
  ngOnInit(): void {
    try {
      this.administradorService.consultarDocentes().subscribe((result) => {
        this.docentesConsulta = result;
      });
    } catch {
      window.alert("Error al conectar con el servidor");
    } 
  }
}
