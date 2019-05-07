import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Employe } from '../../model/employe';
import { EmployeServiceService } from '../../services/employe-service.service';

@Component({
  selector: 'app-edit-new-employe',
  templateUrl: './edit-new-employe.component.html',
  styleUrls: ['./edit-new-employe.component.css']
})

export class EditNewEmployeComponent implements OnInit {

  employe_in_progress: Employe;

  mode_access: string;

  constructor(private router: Router, private route: ActivatedRoute, private employeService: EmployeServiceService) {
    this.employe_in_progress = Employe.createBlank();
    console.log(this.employe_in_progress);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('employe_id') != null) {
        console.log(params.get('employe_id'));
        this.mode_access = 'MODIFICATION';
        this.employeService.findEmployeById(parseInt(params.get('employe_id'), 10))
        .subscribe(
          (response) => { this.employe_in_progress = response; });
      } else {
        this.mode_access = 'AJOUT';
        console.log('Good');
      }
    });
  }

  public addEmploye(employe: Employe): void {
    console.log(this.employe_in_progress);
    this.employeService.createEmploye(this.employe_in_progress).subscribe((response) => {this.router.navigateByUrl('/employe'); } );
  }

  public updateEmploye(employe: Employe): void {
    this.employeService.updateEmploye(this.employe_in_progress).subscribe(
      (response) => { this.router.navigateByUrl('/employe'); });
  }

  public addUpdateEmployeClicked(): void {
    if (this.mode_access === 'MODIFICATION') {
      this.updateEmploye(this.employe_in_progress);
    } else {
      this.addEmploye(this.employe_in_progress);
    }
  }

}
