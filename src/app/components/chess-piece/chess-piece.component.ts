import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, NgModule, OnInit, Type, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PieceBishopComponent } from './piece-bishop/piece-bishop.component';
import { PieceKingComponent } from './piece-king/piece-king.component';
import { PieceKnightComponent } from './piece-knight/piece-knight.component';
import { PiecePawnComponent } from './piece-pawn/piece-pawn.component';
import { PieceQueenComponent } from './piece-queen/piece-queen.component';
import { PieceRookComponent } from './piece-rook/piece-rook.component';
import { ChessPieceDirective } from './chess-piece.directive';
import { IChessPieceComponent } from './i-chess-piece.component';

@NgModule({
  imports: [],
  declarations: [
    PieceKingComponent,
    PieceQueenComponent,
    PieceRookComponent,
    PieceBishopComponent,
    PieceKnightComponent,
    PiecePawnComponent,
    ChessPieceDirective],
  exports: [
    PieceKingComponent,
    PieceQueenComponent,
    PieceRookComponent,
    PieceBishopComponent,
    PieceKnightComponent,
    PiecePawnComponent,
    ChessPieceDirective]
})
export class CheesPieceModule { }

@Component({
  selector: 'chess-piece',
  templateUrl: './chess-piece.component.html',
  styleUrls: ['./chess-piece.component.scss'],
  standalone: true,
  imports: [CheesPieceModule, IonicModule, CommonModule, FormsModule]
})
export class ChessPieceComponent implements OnInit, AfterViewInit {

  @Input() row: number
  @Input() col: number

  @ViewChild(ChessPieceDirective, { static: true }) cpHost!: ChessPieceDirective
  componentType: Type<IChessPieceComponent> | null

  constructor() { }

  ngOnInit() {
    this.componentType = this.getComponentType(this.row, this.col)
  }

  ngAfterViewInit(): void {
    if(this.componentType != null)
      this.loadPieceComponent(this.componentType)
  }

  loadPieceComponent(componentType: Type<IChessPieceComponent>) {
    const viewContainerRef = this.cpHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<IChessPieceComponent>(componentType);
    componentRef.instance.row = this.row;
    componentRef.instance.col = this.col;
  }

  getComponentType(row: number, col: number) {
    const cellIndex = (row * 8) - (8 - col)
    console.log(row, col, cellIndex)

    if((cellIndex > 8 && cellIndex < 17) || (cellIndex > 48 && cellIndex < 57)){
      return PiecePawnComponent
    }
    
    switch (cellIndex) {
        case 1:
        case 8:
        case 57:
        case 64:
          return PieceRookComponent
        case 2:
        case 7:
        case 58:
        case 63:
          return PieceKnightComponent
        case 3:
        case 6:
        case 59:
        case 62:
          return PieceBishopComponent
        case 4:
        case 60:
          return PieceQueenComponent
        case 5:
        case 61:
          return PieceKingComponent
    }

    return null
  }

}
