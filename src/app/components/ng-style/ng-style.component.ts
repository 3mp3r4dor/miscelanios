import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
     Hola mundo, esta es un a prueba .....
    </p>

<button class="btn btn-primary" (click)="tamano = tamano + 5">
<i class="fa fa-plus"></i>
Aumentar
</button>
<button *ngIf="tamano >= 0"class="btn btn-danger" (click)="tamano = tamano - 5">
<i class="fa fa-minus"></i>
Disminuir
</button>



  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano = 10;
  constructor() { }

  ngOnInit() {
  }

}
