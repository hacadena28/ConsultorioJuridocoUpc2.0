import { Component, Input } from '@angular/core';
import { Estudiante } from 'src/app/login/interfaces/estudiante';
import { Usuario } from 'src/app/login/interfaces/usuario';
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

  deleteEstudiante(estudiante:Estudiante | number):void{
    try{
      this.administradorService.deleteEstudiante(estudiante).subscribe(
        
        
        (result)=>{
        console.log("eliminando");
        window.alert("Estudiante borrado correctamente");
      })
    }catch{
      window.alert("Errror al borrar");
  
    }
  }
  deleteUsuarioPeticions(usuario: Usuario | number): void {
    try {
      this.administradorService.deleteUsuarioPeticion(usuario).subscribe((result) => {
        console.log("eliminado");
        window.alert("Usuario borrado correctamente");
        window.location.reload();
      });
    } catch {
      window.alert("Errror al borrar");
    }
  }
}
