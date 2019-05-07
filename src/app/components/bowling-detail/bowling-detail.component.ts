import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Activite } from '../../model/activite';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { BowlingServiceService } from '../../services/bowling-service.service';

@Component({
  selector: 'app-bowling-detail',
  templateUrl: './bowling-detail.component.html',
  styleUrls: ['./bowling-detail.component.css']
})
export class BowlingDetailComponent implements OnInit {

  activite: Activite;
  activites: Activite[];

  constructor(private route: ActivatedRoute, private router: Router,
              private bowlingService: BowlingServiceService, private location: Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getActiviteById(parseInt(params.get('activite_id'), 10));
    });
  }

  public getActiviteById(id: number): void {
    this.bowlingService.findActiviteById(id).subscribe((response) => {
    this.activite = response; console.log(this.activite);
    });
  }

  public editButtonPressed(): void {
    this.router.navigateByUrl('/editNewBowling/' + this.activite.id);
  }

  public deleteButtonPressed(): void {
    this.bowlingService.deleteActiviteById(this.activite).subscribe((response) => { this.router.navigateByUrl('/bowling'); });
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
