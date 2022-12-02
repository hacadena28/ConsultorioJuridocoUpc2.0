import { Component, Input } from '@angular/core';
import { Estudiante } from 'src/app/login/interfaces/estudiante';
import { AdminstradorService } from '../../services/adminstrador.service';

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.css']
})
export class ListaEstudiantesComponent {
  constructor(private administradorService: AdminstradorService){

  }
  @Input() estudiantesConsulta :Estudiante[] = [];
   
   get estudiantesConsultados(){
    return this.estudiantesConsulta
  }
  ngOnInit(): void {
    try {
      this.administradorService.consultarEstudiantes().subscribe((result) => {
        this.estudiantesConsulta = result;
      });
    } catch {
      window.alert("Error al conectar con el servidor");
    } 
  }
}
