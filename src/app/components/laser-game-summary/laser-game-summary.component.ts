import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Activite } from '../../model/activite';

@Component({
  selector: 'app-laser-game-summary',
  templateUrl: './laser-game-summary.component.html',
  styleUrls: ['./laser-game-summary.component.css']
})

export class LaserGameSummaryComponent {

  @Input()
  activite: Activite;

  @Output()
  userClick: EventEmitter<number> = new EventEmitter();

  constructor() {}

  userClicked() {
    this.userClick.emit(this.activite.id);
  }

}
