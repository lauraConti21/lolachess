import { Component, Input, OnInit } from '@angular/core';
import { IChessPieceComponent } from '../i-chess-piece.component';

@Component({
  selector: 'piece-rook',
  templateUrl: './piece-rook.component.html',
  styleUrls: ['./piece-rook.component.scss'],
})
export class PieceRookComponent implements IChessPieceComponent, OnInit {

  @Input() row: number
  @Input() col: number

  constructor() { }

  ngOnInit() { }

}
