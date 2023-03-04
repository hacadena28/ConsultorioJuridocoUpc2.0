import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminstradorService } from 'src/app/administrador/services/adminstrador.service';
import { CasoService } from 'src/app/caso/services/caso.service';
import { DocenteService } from 'src/app/docente/services/docente.service';
import { Caso } from 'src/app/login/interfaces/caso';
import { Docente } from 'src/app/login/interfaces/docente';

@Component({
  selector: 'app-principal-docente',
  templateUrl: './principal-docente.component.html',
  styleUrls: ['./principal-docente.component.css'],
})
export class PrincipalDocenteComponent {
  constructor(
    private docenteService: DocenteService,
    private _route: ActivatedRoute,
    private administradorService: AdminstradorService,
    private casoService: CasoService
  ) {
    console.log(this._route.snapshot.paramMap.get('id'));

    try {
      docenteService
        .consultarDocente(Number(this._route.snapshot.paramMap.get('id')))
        .subscribe((result) => {
          this.docente = result;
        });
    } catch {
      window.alert('Error al conectar con el servidor');
    }
  }

  @Input() casosDocenteConsulta: Caso[] = [];
  @Input() caso: Caso = {
    idCaso: 0,
    nombreCaso: '',
    descripcion: '',
    docente: 0,
    estudiante: 0,
    cliente: 0,
    fecha: '',
    estado: '',
  };

  @Input() edit: string = 'off';
  @Input() editCaso: string = 'off';

  @Input() docente: Docente = {
    idDocente: 1007824012,
    idPersona: 0,
    primerNombre: 'Heli',
    segundoNombre: 'Alberto',
    primerApellido: 'Cadena',
    segundoApellido: 'Arenilla',
    telefono: 3206870778,
    direccion: 'Calle 20',
    correo: 'hacadena@unicesar.edu.co',
    facultad: 'Ingenieria y tecnologia',
  };
  get casosConsultados() {
    return this.casosDocenteConsulta;
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
      this.docenteService.consultarCasos().subscribe((result) => {
        this.casosDocenteConsulta = result;
      });
    } catch {
      window.alert('Error al conectar con el servidor');
    }
  }

//!prube 1
modificar() {
  console.log('Modifcando');

  try {
    this.docenteService
      .modificarDocente(this.docente)
      .subscribe((cliente) => {
        window.alert('Datos modificados correctamente');
        window.location.reload();
      });
    console.log('modificando');
  } catch {
    window.alert('Error al modificar');
  }
}
modificarCaso() {
  console.log('Modifcando');

  try {
    this.docenteService
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
