import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChessboardComponent } from './chessboard/chessboard.component';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [ChessboardComponent],
  exports: [ChessboardComponent]
})

export class ChessboardModule { }

@Component({
  selector: 'app-chess-match',
  templateUrl: './chess-match.page.html',
  styleUrls: ['./chess-match.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ChessboardModule]
})
export class ChessMatchPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
