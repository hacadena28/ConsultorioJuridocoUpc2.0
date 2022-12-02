import { Component, Input } from '@angular/core';
import { Caso } from 'src/app/login/interfaces/caso';
import { Cliente } from 'src/app/login/interfaces/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-principal-cliente',
  templateUrl: './principal-cliente.component.html',
  styleUrls: ['./principal-cliente.component.css']
})
export class PrincipalClienteComponent {
  constructor(private clienteService: ClienteService){

  }
  @Input() casosClienteConsulta :Caso[] = [];
@Input() cliente: Cliente = {
  idCliente: 1007824012,
  idPersona: 0,
  primerNombre: 'Heli',
  segundoNombre: 'Alberto',
  primerApellido: 'Cadena',
  segundoApellido: 'Arenilla',
  telefono: 3206870778,
  direccion: 'Calle 20',
  correo: 'hacadena@unicesar.edu.co'
}
get casosConsultados(){
  return this.casosClienteConsulta
}

ngOnInit(): void {
  try {
    this.clienteService.consultarCasos().subscribe((result) => {
      this.casosClienteConsulta = result;
      console.log(result);
      console.log("hola mundo");
      
      
    });
  } catch {
    window.alert("Error al conectar con el servidor");
  } 
}

 


}
