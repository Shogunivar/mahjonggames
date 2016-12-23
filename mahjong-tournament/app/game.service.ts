import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Game } from './game';

@Injectable()
export class GameService {
  private gamesUrl = 'app/games';  // URL to web API

  constructor(private http: Http) { }

  getGames(): Promise<Game[]> {
    return this.http
      .get(this.gamesUrl)
      .toPromise()
      .then(response => response.json().data as Game[])
      .catch(this.handleError);
  }

  getGame(id: number): Promise<Game> {
    return this.getGames()
      .then(games => games.find(game => game.id === id));
  }

  save(game: Game): Promise<Game> {
    if (game.id) {
      return this.put(game);
    }
    return this.post(game);
  }

  delete(game: Game): Promise<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.gamesUrl}/${game.id}`;

    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }

  // Add new Game
  private post(game: Game): Promise<Game> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.gamesUrl, JSON.stringify(game), { headers: headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  // Update existing Game
  private put(game: Game): Promise<Game> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.gamesUrl}/${game.id}`;

    return this.http
      .put(url, JSON.stringify(game), { headers: headers })
      .toPromise()
      .then(() => game)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
