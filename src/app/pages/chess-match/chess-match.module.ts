import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { ChessPieceComponent } from "src/app/components/chess-piece/chess-piece.component";
import { PieceBishopComponent } from "src/app/components/chess-piece/piece-bishop/piece-bishop.component";
import { PieceKingComponent } from "src/app/components/chess-piece/piece-king/piece-king.component";
import { PieceKnightComponent } from "src/app/components/chess-piece/piece-knight/piece-knight.component";
import { PiecePawnComponent } from "src/app/components/chess-piece/piece-pawn/piece-pawn.component";
import { PieceQueenComponent } from "src/app/components/chess-piece/piece-queen/piece-queen.component";
import { PieceRookComponent } from "src/app/components/chess-piece/piece-rook/piece-rook.component";
import { ChessboardComponent } from "./chessboard/chessboard.component";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
    ],
    declarations: [
        ChessboardComponent,
        ChessPieceComponent,
        PieceKingComponent,
        PieceQueenComponent,
        PieceRookComponent,
        PieceBishopComponent,
        PieceKnightComponent,
        PiecePawnComponent
    ],
    exports: [
        ChessboardComponent,
        ChessPieceComponent,
        PieceKingComponent,
        PieceQueenComponent,
        PieceRookComponent,
        PieceBishopComponent,
        PieceKnightComponent,
        PiecePawnComponent
    ]
})

export class ChessMatchModule { }
