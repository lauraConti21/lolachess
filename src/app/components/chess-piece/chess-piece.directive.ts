import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[chessPiece]'
})
export class ChessPieceDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}