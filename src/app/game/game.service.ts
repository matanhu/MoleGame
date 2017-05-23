import { Hole } from './hole';
import { Injectable } from '@angular/core';

@Injectable()
export class GameService {

  private _holes: Hole[];
  private running: boolean;

  constructor() {
    this._holes = [];
    this.running = true;

    let len = 4;
    while (len --) {
      this._holes.push(new Hole());
    }
  }

  public get holes():Hole[]{
    return this._holes;
  }

  public startGame() {
    setInterval(() => {
      const hole =this._holes[this.getRandom()];
      hole.state = 'up';
      setTimeout(() => hole.state = '', 750);
    }, 1000);
  }

  public stop(): void {
    this.running = false;
  }

  private getRandom(): number{
    return Math.floor(Math.random() * (this.holes.length));
  }

}
