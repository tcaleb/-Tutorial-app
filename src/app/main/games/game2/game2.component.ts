import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.scss']
})
export class Game2Component  implements OnInit { 
  targetNumber!: number;
  userGuess!: number;
  message!: string;

  ngOnInit(): void {
    this.startGame();
  }

  startGame(): void {
    // Generate a random number between 1 and 100 (you can adjust the range)
    this.targetNumber = Math.floor(Math.random() * 100) + 1;
    this.userGuess = 0;
    this.message = 'Try to guess the number!';
  }

  checkGuess(): void {
    if (this.userGuess === null || isNaN(this.userGuess)) {
      this.message = 'Please enter a valid number.';
      return;
    }

    if (this.userGuess === this.targetNumber) {
      this.message = 'Congratulations! You guessed the correct number!';
    } else {
      this.message = this.userGuess < this.targetNumber ? 'Too low! Try again.' : 'Too high! Try again.';
    }
  }


  // Rock, Paper, Scissors
  userChoice: string | null = null;
  computerChoice: string | null = null;
  result: string | null = null;

  play(userChoice: string): void {
    this.userChoice = userChoice;
    this.computerChoice = this.generateComputerChoice();
    this.determineWinner();
  }

  generateComputerChoice(): string {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  determineWinner(): void {
    if (this.userChoice === this.computerChoice) {
      this.result = 'It\'s a tie!';
    } else if (
      (this.userChoice === 'rock' && this.computerChoice === 'scissors') ||
      (this.userChoice === 'paper' && this.computerChoice === 'rock') ||
      (this.userChoice === 'scissors' && this.computerChoice === 'paper')
    ) {
      this.result = 'You win!';
    } else {
      this.result = 'Computer wins!';
    }
  }

  resetGame(): void {
    this.userChoice = null;
    this.computerChoice = null;
    this.result = null;
  }
}






