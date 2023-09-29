import { Component, OnInit } from '@angular/core';
import { ChessboardModel } from 'src/app/models/chessboard.model';

@Component({
  selector: 'chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss'],
})
export class ChessboardComponent implements OnInit {
  chessboard: ChessboardModel = new ChessboardModel();
  String = String;

  constructor() { }

  ngOnInit() {
    console.log("🐝 ~ file: chess-piece.component.ts:39 ~ pippo:", this.chessboard)
  }

}
