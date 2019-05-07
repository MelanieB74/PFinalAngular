import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ActEscapeGame, Activite } from '../../model/activite';
import { EscapeGameServiceService } from 'src/app/services/escape-game-service.service';

@Component({
  selector: 'app-escape-game-new-edit',
  templateUrl: './escape-game-new-edit.component.html',
  styleUrls: ['./escape-game-new-edit.component.css']
})

export class EscapeGameNewEditComponent implements OnInit {

  activite_in_progress: ActEscapeGame;

  mode_access: string;

  constructor(private router: Router, private route: ActivatedRoute, private activiteService: EscapeGameServiceService) {
    this.activite_in_progress = ActEscapeGame.createBlank();
    console.log(this.activite_in_progress);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('activite_id') != null) {
        console.log(params.get('activite_id'));
        this.mode_access = 'MODIFICATION';
        this.activiteService.findActiviteById(parseInt(params.get('activite_id'), 10))
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
    this.activiteService.createActivite(this.activite_in_progress).subscribe((response) => {this.router.navigateByUrl('/escapeGame'); } );
  }

  public updateActivite(activite: Activite): void {
    this.activiteService.updateActivite(this.activite_in_progress).subscribe(
      (response) => { this.router.navigateByUrl('/escapeGame'); } );
  }

  public addUpdateActiviteClicked(): void {
    if (this.mode_access === 'MODIFICATION') {
      this.updateActivite(this.activite_in_progress);
    } else {
      this.addActivite(this.activite_in_progress);
    }
  }

}
