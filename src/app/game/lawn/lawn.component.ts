import { Hole } from '../hole';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush, // Run the component only when inputs 'Hole[]' Array is changed (reference)
  selector: 'app-lawn',
  template: `
      <app-hole *ngFor="let hole of holes" [hole]="hole"></app-hole>
  `,
  styleUrls: ['./lawn.component.css']
})
export class LawnComponent {

  @Input()
  public holes: Hole[];

  constructor() { }

}
