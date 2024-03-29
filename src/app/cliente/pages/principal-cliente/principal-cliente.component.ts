import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminstradorService } from 'src/app/administrador/services/adminstrador.service';
import { CasoService } from 'src/app/caso/services/caso.service';
import { Caso } from 'src/app/login/interfaces/caso';
import { Cliente } from 'src/app/login/interfaces/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-principal-cliente',
  templateUrl: './principal-cliente.component.html',
  styleUrls: ['./principal-cliente.component.css'],
})
export class PrincipalClienteComponent {
  constructor(
    private clienteService: ClienteService,
    private _route: ActivatedRoute,
    private administradorService: AdminstradorService,
    private casoService: CasoService,
  ) {
    console.log(this._route.snapshot.paramMap.get('id'));

    try {
      clienteService
        .consultarCliente(Number(this._route.snapshot.paramMap.get('id')))
        .subscribe((result) => {
          this.cliente = result;
        });
    } catch {
      window.alert('Error al conectar con el servidor');
    }
  }
  @Input() casosClienteConsulta: Caso[] = [];
  @Input() caso: Caso={
    idCaso: 0,
    nombreCaso: '',
    descripcion: '',
    docente: 0,
    estudiante: 0,
    cliente: 0,
    fecha: '',
    estado: ''
  }
  @Input() edit: string = 'off';
  @Input() editCaso: string = 'off';

  @Input() cliente: Cliente = {
    idCliente: 1007824012,
    idPersona: 0,
    primerNombre: 'Heli',
    segundoNombre: 'Alberto',
    primerApellido: 'Cadena',
    segundoApellido: 'Arenilla',
    telefono: 3206870778,
    direccion: 'Calle 20',
    correo: 'hacadena@unicesar.edu.co',
  };

  @Input() clienteMod: Cliente = {
    idCliente: 0,
    idPersona: 0,
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    telefono: 0,
    direccion: '',
    correo: '',
  };
  get casosConsultados() {
    return this.casosClienteConsulta;
  }

  editando(estado: string) {
    this.edit = estado;
    console.log(this.edit);
  }
  editandoCaso(estado: string) {

    this.editCaso = estado;
    console.log(this.edit);
  }

  ngOnInit(): void {
    try {
      this.clienteService.consultarCasos().subscribe((result) => {
        // result.forEach(caso => {
        //   caso.

        // });
        this.casosClienteConsulta = result;
      });
    } catch {
      window.alert('Error al conectar con el servidor');
    }
  }

  modificar() {
    try {
      this.clienteService
        .modificarCliente(this.cliente)
        .subscribe((cliente) => {
          window.alert('Datos modificados correctamente');
          window.location.reload();
        });
    } catch {
      window.alert('Error al modificar');
    }
  }
  modificarCaso() {
    console.log('Modifcando');

    try {
      this.clienteService
        .modificarCaso(this.caso)
        .subscribe((caso) => {
          window.alert('Datos modificados correctamente');
          window.location.reload();
        });
      console.log('modificando');
    } catch {
      window.alert('Error al modificar');
    }
  }
  eliminarCaso(idCaso:number){
    try{
      this.administradorService.deleteCaso(idCaso).subscribe((caso)=>{
        window.alert('Caso eliminado correctamente');
        window.location.reload();
      })
    }catch{
      window.alert("Errror al borrar");
    }
   
  }
  cargarCaso(caso:Caso){
    try {
      this.casoService.consultarCaso(Number(caso.idCaso))
        .subscribe((result) => {
          this.caso = result;
        });
    } catch {
      window.alert('Error al conectar con el servidor');
    }
  }
}
