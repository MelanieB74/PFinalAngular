import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ActLaserGame, Activite } from '../../model/activite';
import { LaserGameServiceService } from '../../services/laser-game-service.service';

@Component({
  selector: 'app-laser-game-edit-new',
  templateUrl: './laser-game-edit-new.component.html',
  styleUrls: ['./laser-game-edit-new.component.css']
})

export class LaserGameEditNewComponent implements OnInit {

  activite_in_progress: ActLaserGame;

  mode_access: string;

  constructor(private router: Router, private route: ActivatedRoute, private laserService: LaserGameServiceService) {
    this.activite_in_progress = ActLaserGame.createBlank();
    console.log(this.activite_in_progress);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('activite_id') != null) {
        console.log(params.get('activite_id'));
        this.mode_access = 'MODIFICATION';
        this.laserService.findActiviteById(parseInt(params.get('activite_id'), 10))
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
    this.laserService.createActivite(this.activite_in_progress).subscribe((response) => {this.router.navigateByUrl('/laserGame'); } );
  }

  public updateActivite(activite: Activite): void {
    this.laserService.updateActivite(this.activite_in_progress).subscribe(
      (response) => { this.router.navigateByUrl('/laserGame'); } );
  }

  public addUpdateActiviteClicked(): void {
    if (this.mode_access === 'MODIFICATION') {
      this.updateActivite(this.activite_in_progress);
    } else {
      this.addActivite(this.activite_in_progress);
    }
  }

}
