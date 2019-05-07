import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Activite } from '../../model/activite';

@Component({
  selector: 'app-escape-game-summary',
  templateUrl: './escape-game-summary.component.html',
  styleUrls: ['./escape-game-summary.component.css']
})

export class EscapeGameSummaryComponent {

  @Input()
  activite: Activite;

  @Output()
  userClick: EventEmitter<number> = new EventEmitter();

  constructor() {}

  userClicked() {
    this.userClick.emit(this.activite.id);
  }

}
