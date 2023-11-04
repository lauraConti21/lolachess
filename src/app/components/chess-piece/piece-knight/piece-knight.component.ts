import { Component, Input, OnInit } from '@angular/core';
import { IChessPieceComponent } from '../i-chess-piece.component';

@Component({
  selector: 'piece-knight',
  templateUrl: './piece-knight.component.html',
  styleUrls: ['./piece-knight.component.scss'],
})
export class PieceKnightComponent implements IChessPieceComponent, OnInit {

  @Input() row: number
  @Input() col: number

  constructor() { }

  ngOnInit() { }

}
