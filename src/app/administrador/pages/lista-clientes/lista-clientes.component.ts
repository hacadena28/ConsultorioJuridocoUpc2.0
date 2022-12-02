import { Component, Input } from '@angular/core';
import { Cliente } from 'src/app/login/interfaces/cliente';
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
}
