import { Component, Input } from '@angular/core';
import { Usuario } from 'src/app/login/interfaces/usuario';
import { AdminstradorService } from '../../services/adminstrador.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {
constructor(private administradorService: AdminstradorService){

}
@Input() usuariosConsulta :Usuario[] = [];
 
 get usuariosConsultados(){
  return this.usuariosConsulta
}
ngOnInit(): void {
  try {
    this.administradorService.consultarUsuarios().subscribe((result) => {
      this.usuariosConsulta = result;
    });
  } catch {
    window.alert("Error al conectar con el servidor");
  } 
}
 
}
