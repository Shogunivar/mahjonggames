import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Game } from './game';
import { GameService } from './game.service';

@Component({
  moduleId: module.id,
  selector: 'my-games',
  templateUrl: 'games.component.html',
  styleUrls: ['games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[];
  selectedGame: Game;
  addingGame = false;
  error: any;

  constructor(
    private router: Router,
    private gameService: GameService) { }

  getGames(): void {
    this.gameService
      .getGames()
      .then(games => this.games = games)
      .catch(error => this.error = error);
  }

  addGame(): void {
    this.addingGame = true;
    this.selectedGame = null;
  }

  close(savedGame: Game): void {
    this.addingGame = false;
    if (savedGame) { this.getGames(); }
  }

  deleteGame(game: Game, event: any): void {
    event.stopPropagation();
    this.gameService
      .delete(game)
      .then(res => {
        this.games = this.games.filter(h => h !== game);
        if (this.selectedGame === game) { this.selectedGame = null; }
      })
      .catch(error => this.error = error);
  }

  ngOnInit(): void {
    this.getGames();
  }

  onSelect(game: Game): void {
    this.selectedGame = game;
    this.addingGame = false;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedGame.id]);
  }
}
