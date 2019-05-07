import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Activite, ActEscapeGame } from '../../model/activite';
import { EscapeGameServiceService } from '../../services/escape-game-service.service';

@Component({
  selector: 'app-escape-game-list',
  templateUrl: './escape-game-list.component.html',
  styleUrls: ['./escape-game-list.component.css']
})

export class EscapeGameListComponent {

  activites: Activite[];

  activite_in_progress: Activite;

  constructor(private router: Router, private escapeService: EscapeGameServiceService) {
    this.activite_in_progress = ActEscapeGame.createBlank();
    this.getAllActivites();
  }


  public addActiviteClicked() {
    console.log(JSON.stringify(this.activite_in_progress, null, 2));
    this.activites.unshift(this.activite_in_progress);
    this.activite_in_progress = ActEscapeGame.createBlank();
  }

  public addNewActivitePressed(): void {
    this.router.navigateByUrl('/editNewEscapeGame');
  }

  public userClickedOnActivite(activite_id): void {
    console.log(activite_id);
    this.router.navigateByUrl('/escapeGame/' + activite_id);
  }

  public getAllActivites(): void {
    this.escapeService.getAllEscapeGames().subscribe((response) => {
      this.activites = response;
      console.log(this.activites);
    });
  }

}
