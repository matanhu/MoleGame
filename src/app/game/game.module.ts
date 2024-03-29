import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { HoleComponent } from './hole/hole.component';
import { LawnComponent } from './lawn/lawn.component';
import { HeaderComponent } from './header/header.component';
import { GameService } from './game.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [GameService],
  declarations: [GameComponent, HoleComponent, LawnComponent, HeaderComponent],
  exports: [GameComponent]
})
export class GameModule { }
