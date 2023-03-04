import { Component, Input } from '@angular/core';
import { CasoService } from 'src/app/caso/services/caso.service';
import { ClienteService } from 'src/app/cliente/services/cliente.service';
import { Caso } from 'src/app/login/interfaces/caso';
import { AdminstradorService } from '../../services/adminstrador.service';

@Component({
  selector: 'app-lista-casos',
  templateUrl: './lista-casos.component.html',
  styleUrls: ['./lista-casos.component.css']
})
export class ListaCasosComponent {
  constructor(private administradorService: AdminstradorService,
    private clienteService:ClienteService,
    private casoService:CasoService
    
    ){

  }
  @Input() casosConsulta :Caso[] = [];
  @Input() edit: string="off";
  @Input() editCaso: string = 'off';
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

   
   get casosConsultados(){
    return this.casosConsulta
  }
  ngOnInit(): void {
    try {
      this.administradorService.consultarCasos().subscribe((result) => {
        this.casosConsulta = result;
      });
    } catch {
      window.alert("Error al conectar con el servidor");
    } 
  }
  editando(estado:string){
    this.edit = estado
    console.log(this.edit);
    
  }
  editandoCaso(estado: string) {

    this.editCaso = estado;
    console.log(this.edit);
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

  deleteCaso(caso: Caso | number): void {
    try {
      this.administradorService.deleteCaso(caso).subscribe((result) => {
        console.log("eliminado");
        window.alert("Caso borrado correctamente");
        window.location.reload();
      });
    } catch {
      window.alert("Errror al borrar");
    }
  }
  cargarCaso(caso:Caso){
    try {
      this.casoService.consultarCaso(Number(caso.idCaso))
        .subscribe((result) => {
          this.caso = result;
          console.log(result);
          console.log('hola mundo');
        });
    } catch {
      window.alert('Error al conectar con el servidor');
    }
  }
}
