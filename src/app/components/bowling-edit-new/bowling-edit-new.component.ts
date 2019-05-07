import { Component, OnInit } from '@angular/core';
import { ActBowling, Activite } from '../../model/activite';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { BowlingServiceService } from '../../services/bowling-service.service';

@Component({
  selector: 'app-bowling-edit-new',
  templateUrl: './bowling-edit-new.component.html',
  styleUrls: ['./bowling-edit-new.component.css']
})

export class BowlingEditNewComponent implements OnInit {

  activite_in_progress: ActBowling;

  mode_access: string;

  constructor(private router: Router, private route: ActivatedRoute, private bowlingService: BowlingServiceService) {
    this.activite_in_progress = ActBowling.createBlank();
    console.log(this.activite_in_progress);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('activite_id') != null) {
        console.log(params.get('activite_id'));
        this.mode_access = 'MODIFICATION';
        this.bowlingService.findActiviteById(parseInt(params.get('activite_id'), 10))
        .subscribe(
          (response) => { this.activite_in_progress = response; });
      } else {
        this.mode_access = 'AJOUT';
        console.log('Good');
      }
    });
  }

  public addActivite(activite: Activite): void {
    console.log(this.activite_in_progress);
    this.bowlingService.createActivite(this.activite_in_progress).subscribe((response) => {this.router.navigateByUrl('/bowling'); } );
  }

  public updateActivite(activite: Activite): void {
    this.bowlingService.updateActivite(this.activite_in_progress).subscribe(
      (response) => { this.router.navigateByUrl('/bowling'); } );
  }

  public addUpdateActiviteClicked(): void {
    if (this.mode_access === 'MODIFICATION') {
      this.updateActivite(this.activite_in_progress);
    } else {
      this.addActivite(this.activite_in_progress);
    }
  }

}
