import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminstradorService } from 'src/app/administrador/services/adminstrador.service';
import { CasoService } from 'src/app/caso/services/caso.service';
import { EstudianteService } from 'src/app/estudiante/services/estudiante.service';
import { Caso } from 'src/app/login/interfaces/caso';
import { Estudiante } from 'src/app/login/interfaces/estudiante';

@Component({
  selector: 'app-principal-estudiante',
  templateUrl: './principal-estudiante.component.html',
  styleUrls: ['./principal-estudiante.component.css'],
})
export class PrincipalEstudianteComponent {
  constructor(
    private estudianteService: EstudianteService,
    private _route: ActivatedRoute,
    private administradorService: AdminstradorService,
    private casoService: CasoService
  ) {
    console.log(this._route.snapshot.paramMap.get('id'));

    try {
      estudianteService
        .consultarEstudiante(Number(this._route.snapshot.paramMap.get('id')))
        .subscribe((result) => {
          this.estudiante = result;
        });
    } catch {
      window.alert('Error al conectar con el servidor');
    }
  }

  @Input() casosEstudianteConsulta: Caso[] = [];
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

  @Input() estudiante: Estudiante = {
    idEstudiante: 1007824012,
    idPersona: 0,
    primerNombre: 'Heli',
    segundoNombre: 'Alberto',
    primerApellido: 'Cadena',
    segundoApellido: 'Arenilla',
    telefono: 3206870778,
    direccion: 'Calle 20',
    correo: 'hacadena@unicesar.edu.co',
    semestre: 8,
    estado: 'Registrado',
  };
  get casosConsultados() {
    return this.casosEstudianteConsulta;
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
      this.estudianteService.consultarCasos().subscribe((result) => {
        this.casosEstudianteConsulta = result;
        console.log(result);
        console.log('hola mundo');
      });
    } catch {
      window.alert('Error al conectar con el servidor');
    }
  }

  //!PRUEBA 1

  modificar() {
    console.log('Modifcando');
  
    try {
      this.estudianteService
        .modificarEstudiante(this.estudiante)
        .subscribe((estudiante) => {
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
      this.estudianteService
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
