import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Activite } from '../../model/activite';
import { LaserGameServiceService } from '../../services/laser-game-service.service';

@Component({
  selector: 'app-laser-game-detail',
  templateUrl: './laser-game-detail.component.html',
  styleUrls: ['./laser-game-detail.component.css']
})

export class LaserGameDetailComponent implements OnInit {

  activite: Activite;
  activites: Activite[];

  constructor(private route: ActivatedRoute, private router: Router,
              private activiteService: LaserGameServiceService, private location: Location) { }

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
    this.router.navigateByUrl('/editNewLaserGame/' + this.activite.id);
  }

  public deleteButtonPressed(): void {
    this.activiteService.deleteActiviteById(this.activite).subscribe((response) => { this.router.navigateByUrl('/laserGame'); });
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
