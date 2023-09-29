import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChessboardModel } from '../../models/chessboard.model';
import { PieceBishopComponent } from './piece-bishop/piece-bishop.component';
import { PieceKingComponent } from './piece-king/piece-king.component';
import { PieceKnightComponent } from './piece-knight/piece-knight.component';
import { PiecePawnComponent } from './piece-pawn/piece-pawn.component';
import { PieceQueenComponent } from './piece-queen/piece-queen.component';
import { PieceRookComponent } from './piece-rook/piece-rook.component';

@NgModule({
  imports: [],
  declarations: [PieceKingComponent, PieceQueenComponent, PieceRookComponent, PieceBishopComponent, PieceKnightComponent, PiecePawnComponent],
  exports: [PieceKingComponent, PieceQueenComponent, PieceRookComponent, PieceBishopComponent, PieceKnightComponent, PiecePawnComponent]
})

export class CheesPieceModule { };

@Component({
  selector: 'chess-piece',
  templateUrl: './chess-piece.component.html',
  styleUrls: ['./chess-piece.component.scss'],
  standalone: true,
  imports: [CheesPieceModule, IonicModule, CommonModule, FormsModule]
})
export class ChessPieceComponent implements OnInit {

  chessboard: ChessboardModel = new ChessboardModel();

  String = String;

  constructor() { }

  ngOnInit() {

    let pippo = new ChessboardModel();

    this.chessboard.chessboardBoxConf = pippo.initChessboar();

    // pippo.initChessboar();
    console.log("🐝 ~ file: chess-piece.component.ts:39 ~ pippo:", this.chessboard)



  }

}
