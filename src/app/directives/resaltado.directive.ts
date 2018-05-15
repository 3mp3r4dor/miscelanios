import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( public elementRef: ElementRef ) {
    console.log('Directiva llamada');
    /* elementRef.nativeElement.style.backgroundColor = 'yellow'; */
   }

   // tslint:disable-next-line:quotemark
   // tslint:disable-next-line:no-input-rename
   @Input('appResaltado') nuevoColor: string;

   @HostListener('mouseenter') mouseEntro() {

      console.log(this.nuevoColor);

      this.resaltar( this.nuevoColor || 'yellow');
   }

   @HostListener('mouseleave') mouseSalio() {
    this.resaltar( null );
 }

   private resaltar( color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
   }

}
