import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bingo',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './bingo.component.html',
  styleUrl: './bingo.component.css'
})

export class BingoComponent implements OnInit {
  drawnNumbers: number[] = [];
  lastDrawnNumber: number | null = null;
  availableNumbers: number[] = [];
  maxNumber: number | null = null;
  hasStarted: boolean = false;
  isGameOver: boolean = false;
  
  ngOnInit(): void {
    this.resetGame();
  }
  
  public startGame() : void {
    if (!this.maxNumber || this.maxNumber < 1) return;

    this.availableNumbers = Array.from({ length: this.maxNumber }, (_, i) => i + 1);
    this.drawnNumbers = [];
    this.lastDrawnNumber = null;
    this.isGameOver = false;
    this.hasStarted = true;
  }

  public resetGame() : void {
    if (!this.maxNumber) return;

    this.availableNumbers = Array.from({ length: this.maxNumber }, (_, i) => i + 1);
    this.drawnNumbers = [];
    this.lastDrawnNumber = null;
    this.isGameOver = false;
  }

  public drawNumber() : void {
    if (this.availableNumbers.length === 0 || this.isGameOver) {
      this.isGameOver = true;
      return;
    }

    const randomIndex = Math.floor(Math.random() * this.availableNumbers.length);
    const newNumber = this.availableNumbers[randomIndex];
    this.availableNumbers = this.availableNumbers.filter(n => n !== newNumber);
    this.drawnNumbers.push(newNumber);
    this.lastDrawnNumber = newNumber;

    //this.speakNumber(newNumber); // Anunciar el número sorteado por voz

    if (this.availableNumbers.length === 0) {
      this.isGameOver = true;
    }
  }

  get sortedDrawnNumbers(): number[] {
    return [...this.drawnNumbers].sort((a, b) => a - b);
  }

  /**
   * Utiliza la API de SpeechSynthesis para anunciar el número sorteado
   * @param num Número a anunciar
   */
  /*private speakNumber(num: number): void {
    const utter = new SpeechSynthesisUtterance(num.toString());
    utter.lang = 'es-ES'; // Español
    window.speechSynthesis.speak(utter);
  }*/
}
