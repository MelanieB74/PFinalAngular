import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Activite, ActLaserGame } from '../../model/activite';
import { LaserGameServiceService } from '../../services/laser-game-service.service';

@Component({
  selector: 'app-laser-game-list',
  templateUrl: './laser-game-list.component.html',
  styleUrls: ['./laser-game-list.component.css']
})
export class LaserGameListComponent {

  activites: Activite[];

  activite_in_progress: Activite;

  constructor(private router: Router, private laserService: LaserGameServiceService) {
    this.activite_in_progress = ActLaserGame.createBlank();
    this.getAllActivites();
  }


  public addActiviteClicked() {
    console.log(JSON.stringify(this.activite_in_progress, null, 2));
    this.activites.unshift(this.activite_in_progress);
    this.activite_in_progress = ActLaserGame.createBlank();
  }

  public addNewActivitePressed(): void {
    this.router.navigateByUrl('/editNewLaserGame');
  }

  public userClickedOnActivite(activite_id): void {
    console.log(activite_id);
    this.router.navigateByUrl('/laserGame/' + activite_id);
  }

  public getAllActivites(): void {
    this.laserService.getAllLaserGames().subscribe((response) => {
      this.activites = response;
      console.log(this.activites);
    });
  }

}
