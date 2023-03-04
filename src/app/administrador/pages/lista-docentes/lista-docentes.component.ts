import { Component, Input } from '@angular/core';
import { Docente } from 'src/app/login/interfaces/docente';
import { Usuario } from 'src/app/login/interfaces/usuario';
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

deleteDocente(docente:Docente | number):void{
  try{
    this.administradorService.deleteDocente(docente).subscribe(
      
      
      (result)=>{
      console.log("eliminando");
      window.alert("Docente borrado correctamente");
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
