import { Component, Input, OnInit } from '@angular/core';
import { IChessPieceComponent } from '../i-chess-piece.component';

@Component({
  selector: 'piece-pawn',
  templateUrl: './piece-pawn.component.html',
  styleUrls: ['./piece-pawn.component.scss'],
})
export class PiecePawnComponent implements IChessPieceComponent, OnInit {

  @Input() row: number
  @Input() col: number
  
  constructor() { }

  ngOnInit() { }

}
