import { Component, Input } from '@angular/core';
import { Caso } from 'src/app/login/interfaces/caso';
import { Cliente } from 'src/app/login/interfaces/cliente';
import { CasoService } from '../../services/caso.service';

@Component({
  selector: 'app-registrar-caso',
  templateUrl: './registrar-caso.component.html',
  styleUrls: ['./registrar-caso.component.css']
})
export class RegistrarCasoComponent {
  constructor(private casoService : CasoService){

  }

  @Input() cliente: Cliente = {
    idCliente: 1007824012,
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
  estado: ''
}

  agregarCaso(){
    try{
      this.casoService.agregarCaso(this.caso).subscribe((caso)=>{
        if(caso!=null){

          window.alert('Caso registrado correctamente');
          
        }
      })
    }catch(error){
      window.alert(error);
      window.alert('Datos del caso no se pueden guardar');

    }
  }
}
