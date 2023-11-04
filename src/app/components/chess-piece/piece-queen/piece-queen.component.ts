import { Component, Input, OnInit } from '@angular/core';
import { IChessPieceComponent } from '../i-chess-piece.component';

@Component({
  selector: 'piece-queen',
  templateUrl: './piece-queen.component.html',
  styleUrls: ['./piece-queen.component.scss'],
})
export class PieceQueenComponent implements IChessPieceComponent, OnInit {

  @Input() row: number
  @Input() col: number

  constructor() { }

  ngOnInit() { }

}
