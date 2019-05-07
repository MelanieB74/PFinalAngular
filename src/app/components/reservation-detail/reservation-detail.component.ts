import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/model/Reservation';
import { ReservationServiceService } from '../../services/reservation-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { EscapeGameServiceService } from '../../services/escape-game-service.service';

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.css']
})

export class ReservationDetailComponent implements OnInit {

  reservation: Reservation;
  reservations: Reservation[];

  constructor(private router: Router, private route: ActivatedRoute, private location: Location,
              private reservationService: ReservationServiceService, private activiteService: EscapeGameServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getReservationById(parseInt(params.get('reservation_id'), 10));
    });
  }

  public getReservationById(id: number): void {
    this.reservationService.findReservationById(id).subscribe((response) => {
      this.reservation = response; console.log(this.reservation);
      console.log(this.reservation.activite);
    });
  }

  public getActiviteById(id: number): void {
    this.activiteService.findActiviteById(parseInt(('activite_id'), 10)).subscribe((data) => {
      this.reservation.activite = data;
    });
  }

  public editButtonPressed(): void {
    this.router.navigateByUrl('/editNewReservation/' + this.reservation.id);
  }

  public deleteButtonPressed(): void {
    this.reservationService.deleteReservationById(this.reservation).subscribe((response) => {
      this.router.navigateByUrl('/reservation');
    });
  }

  public findReservationById(id: number): Reservation {
    for (const reservation of this.reservations) {
      if (reservation.id === id) {
        return reservation;
      }
    }
    return null;
  }

  public goBackButtonPressed(): void {
    this.location.back();
  }

}
