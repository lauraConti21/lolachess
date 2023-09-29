import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'chess-match',
    pathMatch: 'full',
  },
  {
    path: 'chess-match',
    loadComponent: () => import('./pages/chess-match/chess-match.page').then(m => m.ChessMatchPage)
  },
];
