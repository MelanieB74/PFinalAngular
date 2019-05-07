import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Activite } from '../../model/activite';
import { EscapeGameServiceService } from '../../services/escape-game-service.service';

@Component({
  selector: 'app-escape-game-detail',
  templateUrl: './escape-game-detail.component.html',
  styleUrls: ['./escape-game-detail.component.css']
})

export class EscapeGameDetailComponent implements OnInit {

  activite: Activite;

  activites: Activite[];

  constructor(private route: ActivatedRoute, private router: Router,
              private activiteService: EscapeGameServiceService, private location: Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getActiviteById(parseInt(params.get('activite_id'), 10));
    });
  }

  public getActiviteById(id: number): void {
    this.activiteService.findActiviteById(id).subscribe((response) => {
    this.activite = response; console.log(this.activite);
    });
  }

  public editButtonPressed(): void {
    this.router.navigateByUrl('/editNewEscapeGame/' + this.activite.id);
  }

  public deleteButtonPressed(): void {
    this.activiteService.deleteActiviteById(this.activite).subscribe((response) => { this.router.navigateByUrl('/escapeGame'); });
  }

  public findActiviteById(id: number): Activite {
    for (const activite of this.activites) {
      if (activite.id === id) {
        return activite;
      }
    }
    return null;
  }

  public goBackButtonPressed(): void {
    this.location.back();
  }

}
