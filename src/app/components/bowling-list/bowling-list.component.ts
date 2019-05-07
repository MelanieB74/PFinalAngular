import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Activite, ActBowling } from '../../model/activite';
import { BowlingServiceService } from '../../services/bowling-service.service';

@Component({
  selector: 'app-bowling-list',
  templateUrl: './bowling-list.component.html',
  styleUrls: ['./bowling-list.component.css']
})

export class BowlingListComponent {

  activites: Activite[];

  activite_in_progress: Activite;

  constructor(private router: Router, private bowlingService: BowlingServiceService) {
    this.activite_in_progress = ActBowling.createBlank();
    this.getAllActivites();
  }


  public addActiviteClicked() {
    console.log(JSON.stringify(this.activite_in_progress, null, 2));
    this.activites.unshift(this.activite_in_progress);
    this.activite_in_progress = ActBowling.createBlank();
  }

  public addNewActivitePressed(): void {
    this.router.navigateByUrl('/editNewBowling');
  }

  public userClickedOnActivite(activite_id): void {
    console.log(activite_id);
    this.router.navigateByUrl('/bowling/' + activite_id);
  }

  public getAllActivites(): void {
    this.bowlingService.getAllBowlings().subscribe((response) => {
      this.activites = response;
      console.log(this.activites);
    });
  }

}

