import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bingo',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './bingo.component.html',
  styleUrl: './bingo.component.css'
})
export class BingoComponent {

}
