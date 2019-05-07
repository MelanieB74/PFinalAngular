import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Activite } from '../../model/activite';

@Component({
  selector: 'app-bowling-summary',
  templateUrl: './bowling-summary.component.html',
  styleUrls: ['./bowling-summary.component.css']
})

export class BowlingSummaryComponent {

  @Input()
  activite: Activite;

  @Output()
  userClick: EventEmitter<number> = new EventEmitter();

  constructor() {}

  userClicked() {
    this.userClick.emit(this.activite.id);
  }

}

