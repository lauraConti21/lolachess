import { Component, Input, OnInit } from '@angular/core';
import { IChessPieceComponent } from '../i-chess-piece.component';

@Component({
  selector: 'piece-king',
  templateUrl: './piece-king.component.html',
  styleUrls: ['./piece-king.component.scss'],
})
export class PieceKingComponent implements IChessPieceComponent, OnInit {

  @Input() row: number
  @Input() col: number

  constructor() { }

  ngOnInit() { }

}
