import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent {
  @Input() numeroMenu: Number = 1;

  cambiarMenu(numero: Number): void {
    if (numero == 0) {
      this.numeroMenu = 0;
    } else if (numero == 1) {
      this.numeroMenu = 1;
    } else if (numero == 2) {
      this.numeroMenu = 2;
    }
  }
}
