import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/cliente/services/cliente.service';
import { Caso } from 'src/app/login/interfaces/caso';
import { Cliente } from 'src/app/login/interfaces/cliente';
import { CasoService } from '../../services/caso.service';

@Component({
  selector: 'app-registrar-caso',
  templateUrl: './registrar-caso.component.html',
  styleUrls: ['./registrar-caso.component.css']
})
export class RegistrarCasoComponent {
  constructor(private casoService : CasoService , private clienteService : ClienteService, private router: Router,private _route:ActivatedRoute){
    console.log(this._route.snapshot.paramMap.get('id'));

    try {this.clienteService.consultarCliente(Number(this._route.snapshot.paramMap.get('id')))
        .subscribe((result) => {
          this.cliente = result;
          console.log(result);
          console.log(this.cliente);
          
          console.log('probando obtencion de cliente');
        });
    } catch {
      window.alert('Error al conectar con el servidor');
    }
  }

  @Input() cliente: Cliente = {
    idCliente: 0,
    idPersona: 0,
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    telefono: 0,
    direccion: '',
    correo: ''
  } 
@Input() caso:Caso = {
  idCaso: 0,
  nombreCaso: '',
  descripcion: '',
  docente: 0,
  estudiante: 0,
  cliente: 0,
  fecha: '',
  estado: 'REGISTRADO'
}

  agregarCaso(){
    try{
      this.caso.cliente = this.cliente.idCliente
      console.log(this.caso);
      
      this.casoService.agregarCaso(this.caso).subscribe((caso)=>{
        if(caso!=null){

          window.alert('Caso registrado correctamente');
          
          this.router.navigateByUrl('clientePrincipal/'+this.caso.cliente);

        }
      })
    }catch(error){
      window.alert(error);
      window.alert('Datos del caso no se pueden guardar');

    }
  }
  cancelarCaso(){
    
      this.caso.cliente = this.cliente.idCliente
      console.log(this.caso);

          this.router.navigateByUrl('clientePrincipal/'+this.caso.cliente);

      
  
  }

}
