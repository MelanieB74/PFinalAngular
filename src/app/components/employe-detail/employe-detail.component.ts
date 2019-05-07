import { Component, OnInit } from '@angular/core';
import { Employe } from '../../model/employe';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeServiceService } from '../../services/employe-service.service';

@Component({
  selector: 'app-employe-detail',
  templateUrl: './employe-detail.component.html',
  styleUrls: ['./employe-detail.component.css']
})

export class EmployeDetailComponent implements OnInit {

  employe: Employe;

  employes: Employe[];

  constructor(private route: ActivatedRoute, private router: Router,
              private employeService: EmployeServiceService, private location: Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getEmployeById(parseInt(params.get('employe_id'), 10));
    });
  }

  public getEmployeById(id: number): void {
    this.employeService.findEmployeById(id).subscribe((response) => {
    this.employe = response; console.log(this.employe);
    });
  }

  public editButtonPressed(): void {
    this.router.navigateByUrl('/editNewEmploye/' + this.employe.id);
  }

  public deleteButtonPressed(): void {
    this.employeService.deleteEmployeById(this.employe).subscribe((response) => { this.router.navigateByUrl('/employe'); });
  }

  public findEmployeById(id: number): Employe {
    for (const employe of this.employes) {
      if (employe.id === id) {
        return employe;
      }
    }
    return null;
  }

  public goBackButtonPressed(): void {
    this.location.back();
  }



}
