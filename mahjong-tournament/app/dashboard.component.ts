import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Game } from './game';
import { GameService } from './game.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  games: Game[] = [];

  constructor(
    private router: Router,
    private gameService: GameService) {
  }

  ngOnInit(): void {
    this.gameService.getGames()
      .then(games => this.games = games.slice(1, 5));
  }

  gotoDetail(game: Game): void {
    let link = ['/detail', game.id];
    this.router.navigate(link);
  }
}
