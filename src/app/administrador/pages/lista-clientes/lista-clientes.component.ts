import { Component, Input } from '@angular/core';
import { Cliente } from 'src/app/login/interfaces/cliente';
import { Usuario } from 'src/app/login/interfaces/usuario';
import { AdminstradorService } from '../../services/adminstrador.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent {
  constructor(private administradorService: AdminstradorService){

  }
  @Input() clientesConsulta :Cliente[] = [];
   
   get clientesConsultados(){
    return this.clientesConsulta
  }
  ngOnInit(): void {
    try {
      this.administradorService.consultarCliente().subscribe((result) => {
        this.clientesConsulta = result;
      });
    } catch {
      window.alert("Error al conectar con el servidor");
    } 
  }


  deleteCliente(cliente:Cliente | number):void{
    try{
      this.administradorService.deleteCliente(cliente).subscribe(
        
        
        (result)=>{
        console.log("eliminando");
        window.alert("Cliente borrado correctamente");
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
