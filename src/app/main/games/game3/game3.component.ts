import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game3',
  templateUrl: './game3.component.html',
  styleUrls: ['./game3.component.scss']
})
export class Game3Component implements OnInit {
  words: string[] = ['angular', 'javascript', 'typescript', 'html', 'css'];
  selectedWord: string = '';
  guessedWord: string[] = [];
  incorrectGuesses: string[] = [];
  maxIncorrectGuesses: number = 6;
  gameOver: boolean = false;
  gameWon: boolean = false;
  userGuess: string = '';

  ngOnInit(): void {
    this.startGame();
  }

  startGame(): void {
    this.selectedWord = this.getRandomWord();
    this.guessedWord = Array(this.selectedWord.length).fill('_');
    this.incorrectGuesses = [];
    this.gameOver = false;
    this.gameWon = false;
    this.userGuess = '';
  }

  getRandomWord(): string {
    const randomIndex = Math.floor(Math.random() * this.words.length);
    return this.words[randomIndex];
  }

  makeGuess(): void {
    if (!this.gameOver && !this.gameWon && this.userGuess.length === 1 && /^[a-zA-Z]$/.test(this.userGuess)) {
      if (this.selectedWord.includes(this.userGuess)) {
        this.updateGuessedWord(this.userGuess);
      } else {
        this.handleIncorrectGuess(this.userGuess);
      }

      // Clear the input field after a guess
      this.userGuess = '';
    }
  }

  updateGuessedWord(letter: string): void {
    for (let i = 0; i < this.selectedWord.length; i++) {
      if (this.selectedWord[i] === letter) {
        this.guessedWord[i] = letter;
      }
    }

    if (!this.guessedWord.includes('_')) {
      this.gameWon = true;
      this.gameOver = true;
    }
  }

  handleIncorrectGuess(letter: string): void {
    if (!this.incorrectGuesses.includes(letter)) {
      this.incorrectGuesses.push(letter);

      if (this.incorrectGuesses.length >= this.maxIncorrectGuesses) {
        this.gameOver = true;
      }
    }
  }
}
