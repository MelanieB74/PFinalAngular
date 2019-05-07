import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employe } from '../../model/employe';
import { EmployeServiceService } from '../../services/employe-service.service';


@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})

export class EmployeListComponent {

  employes: Employe[];
  employe_in_progress: Employe;

  constructor(private router: Router, private employeService: EmployeServiceService) {
    this.employe_in_progress = Employe.createBlank();
    this.getAllEmployes();
  }

  public addEmployeClicked() {
    console.log(JSON.stringify(this.employe_in_progress, null, 2));
    this.employes.unshift(this.employe_in_progress);
    this.employe_in_progress = Employe.createBlank();
  }

  public addNewEmployePressed(): void {
    this.router.navigateByUrl('/editNewEmploye');
  }

  public userClickedOnEmploye(employe_id): void {
    console.log(employe_id);
    this.router.navigateByUrl('/employe/' + employe_id);
  }

  public getAllEmployes(): void {
    this.employeService.getAllEmployes().subscribe((response) => {
      this.employes = response;
      console.log(this.employes);
    });
  }


}
