import { Component, Input, OnInit } from '@angular/core';
import { ChessboardBox } from 'src/app/models/chessboard.model';
@Component({
  selector: 'chess-piece',
  templateUrl: './chess-piece.component.html',
  styleUrls: ['./chess-piece.component.scss'],

})
export class ChessPieceComponent implements OnInit {

  @Input() boxConf: ChessboardBox;

  constructor() { }

  ngOnInit() {




  }


  selectBox() {

  }

}
