import { Component, OnInit } from '@angular/core';
import { Client } from '../../model/Client';
import { Reservation } from 'src/app/model/Reservation';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ReservationServiceService } from '../../services/reservation-service.service';
import { ClientServiceService } from '../../services/client-service.service';
import { ActLaserGame, Activite } from '../../model/activite';
import { LaserGameServiceService } from '../../services/laser-game-service.service';

@Component({
  selector: 'app-reservation-edit-new',
  templateUrl: './reservation-edit-new.component.html',
  styleUrls: ['./reservation-edit-new.component.css']
})

export class ReservationEditNewComponent implements OnInit {

  client_in_progress: Client;
  reservation_in_progress: Reservation;

  mode_access: string;

  activite_in_progress: ActLaserGame;


  constructor(private clientService: ClientServiceService, private router: Router, private route: ActivatedRoute,
              private reservationService: ReservationServiceService, private activiteService: LaserGameServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('reservation_id') != null) {
        console.log(params.get('reservation_id'));
        this.mode_access = 'MODIFICATION';
        this.reservationService.findReservationById(parseInt(params.get('reservation_id'), 10)).subscribe(
          (response) => {
            this.reservation_in_progress = response;
          });
      } else {
        this.mode_access = 'AJOUT';
        this.reservation_in_progress = Reservation.createBlank();
        this.reservation_in_progress.activite = Activite.createBlank();
        this.clientService.findClientById(1).subscribe(
          (data) => {
            this.reservation_in_progress.client = data;
          });
        console.log('good');
      }
    });
  }

  public addReservation(reservation: Reservation): void {
    console.log(this.reservation_in_progress);
    this.activiteService.findActiviteById(this.reservation_in_progress.activite.id).subscribe(
      (response) => {
        this.reservation_in_progress.activite = response;
        this.reservationService.createReservation(this.reservation_in_progress).subscribe((data) => {
          this.router.navigateByUrl('/reservation');
        });
      }
    );
  }

  public updateReservation(reservation: Reservation): void {
    this.reservationService.updateReservation(this.reservation_in_progress).subscribe((response) => {
      this.router.navigateByUrl('/reservation');
    });
  }

  public addUpdateReservationClicked(): void {
    if (this.mode_access === 'MODIFICATION') {
      this.updateReservation(this.reservation_in_progress);
    } else {
      this.addReservation(this.reservation_in_progress);
    }
  }

}
