import { Component, Input, Output, OnInit } from '@angular/core';
import { Activite } from '../../model/activite';
import { Router } from '@angular/router';
import { LaserGameServiceService } from '../../services/laser-game-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-infos-laser-game',
  templateUrl: './page-infos-laser-game.component.html',
  styleUrls: ['./page-infos-laser-game.component.css']
})

export class PageInfosLaserGameComponent implements OnInit {

  activite: Activite;

  constructor(private router: Router, private laserService: LaserGameServiceService) {
  }

  index = 0;

  openNext() {
      this.index = (this.index === 2) ? 0 : this.index + 1;
  }

  openPrev() {
      this.index = (this.index === 0) ? 2 : this.index - 1;
  }

  onTabOpen(e) {
    this.index = e.index;
  }

  ngOnInit() {
    this.laserService.findActiviteById(1).subscribe(activite => this.activite = activite);
  }

}
