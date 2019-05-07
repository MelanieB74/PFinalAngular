import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Employe } from 'src/app/model/employe';

@Component({
  selector: 'app-employe-summary',
  templateUrl: './employe-summary.component.html',
  styleUrls: ['./employe-summary.component.css']
})

export class EmployeSummaryComponent {

  @Input()
  employe: Employe;

  @Output()
  userClick: EventEmitter<number> = new EventEmitter();

  constructor() {}

  userClicked() {
    this.userClick.emit(this.employe.id);
  }

}
