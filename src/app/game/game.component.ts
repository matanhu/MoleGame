import { GameService } from './game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  template: `
    <div id="game">
      <app-header (click)="game.startGame()"></app-header>
      <app-lawn [holes]="game.holes"></app-lawn>
    </div>
  `,
  styles: [`
    #game {
			background-color: green;
			width: 100%;
			height: 750px;
			position: fixed;
		}
  `]
})
export class GameComponent implements OnInit {
  public game: GameService;

  constructor(game: GameService) {
      this.game = game;
   }

  ngOnInit() {
  }

}
