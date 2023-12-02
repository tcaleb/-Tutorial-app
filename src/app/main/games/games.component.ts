import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  words: string[] = ["apple", "banana", "orange", "grape", "kiwi", "melon", "pawpaw", "coconut", "mango", "pineapple"];
  currentWord: string = "";
  scrambledWord: string = "";
  userInput: string = "";
  resultMessage: string = "";

  ngOnInit(): void {
    this.generateWord();
  }

  scrambleWord(word: string): string {
    return word.split('').sort(() => Math.random() - 0.5).join('');
  }

  generateWord(): void {
    const randomIndex = Math.floor(Math.random() * this.words.length);
    this.currentWord = this.words[randomIndex];
    this.scrambledWord = this.scrambleWord(this.currentWord);
  }

  checkAnswer(): void {
    this.userInput = this.userInput.toLowerCase();

    if (this.userInput === this.currentWord) {
      this.resultMessage = 'Correct! Well done!';
    } else {
      this.resultMessage = 'Oops! That\'s incorrect. Try again!';
    }

    // Clear input and generate a new word
    this.userInput = '';
    this.generateWord();
  }

  isLinear = false;
  
}
