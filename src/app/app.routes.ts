import { Routes } from '@angular/router';
import { BingoComponent } from './components/bingo/bingo.component';

export const routes: Routes = [
  { path: 'bingo', component: BingoComponent },
  { path: '**', pathMatch:'full', redirectTo:'bingo' }
];
