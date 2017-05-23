import { Hole } from '../hole';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hole',
  template: `
    <!-- <div class="hole {{hole.state}}"></div> -->
     <div class="hole hit"></div> 
     <div class="hole sad"></div> 
     <div class="hole up"></div> 
     <div class="hole start"></div> 
  `,
  styleUrls: ['./hole.component.css']
})
export class HoleComponent{

  @Input()
  public hole: Hole;

}
