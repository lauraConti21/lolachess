import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChessMatchModule } from './chess-match.module';


@Component({
  selector: 'app-chess-match',
  templateUrl: './chess-match.page.html',
  styleUrls: ['./chess-match.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ChessMatchModule]
})
export class ChessMatchPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
