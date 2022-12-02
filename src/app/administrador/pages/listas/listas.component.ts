import { Component, Input } from '@angular/core';
import { AdminstradorService } from '../../services/adminstrador.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent {
  constructor() {}

  @Input()  numeroLista :Number = 0;

  
  cambiarLista(numero: Number): void {
    if (numero == 0) {
      this.numeroLista = 0;
    } else if (numero == 1) {
      this.numeroLista = 1;
    } else if (numero == 2) {
      this.numeroLista = 2;
    } else if (numero == 3) {
      this.numeroLista = 3;
    } else if (numero == 4) {
      this.numeroLista = 4;
    }
  }
}
