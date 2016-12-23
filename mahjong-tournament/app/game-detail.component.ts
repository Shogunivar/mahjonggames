import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Game } from './game';
import { Result } from './result';
import { User } from './user';

import { GameService } from './game.service';

@Component({
  moduleId: module.id,
  selector: 'my-game-detail',
  templateUrl: 'game-detail.component.html',
  styleUrls: ['game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  @Input() game: Game;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.gameService.getGame(id)
            .then(game => this.game = game);
      } else {
        this.navigated = false;
        this.game = new Game();
        this.game.rank1 = new Result();
        this.game.rank1.user = new User();
        this.game.rank2 = new Result();
        this.game.rank2.user = new User();
        this.game.rank3 = new Result();
        this.game.rank3.user = new User();
        this.game.rank4 = new Result();
        this.game.rank4.user = new User();


      }
    });
  }

  save(): void {
    this.gameService
        .save(this.game)
        .then(game => {
          this.game = game; // saved game, w/ id if new
          this.goBack(game);
        })
        .catch(error => this.error = error); 
  }

  goBack(savedGame: Game = null): void {
    this.close.emit(savedGame);
    if (this.navigated) { window.history.back(); }
  }
}
