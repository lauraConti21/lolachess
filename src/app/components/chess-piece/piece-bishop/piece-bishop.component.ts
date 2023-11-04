import { Component, Input, OnInit } from '@angular/core';
import { IChessPieceComponent } from '../i-chess-piece.component';

@Component({
  selector: 'piece-bishop',
  templateUrl: './piece-bishop.component.html',
  styleUrls: ['./piece-bishop.component.scss'],
})
export class PieceBishopComponent implements IChessPieceComponent, OnInit {

  @Input() row: number
  @Input() col: number

  constructor() { }

  ngOnInit() { }

}
