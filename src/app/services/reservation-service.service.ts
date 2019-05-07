import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../model/Reservation';
const RESERVATION_SERVER = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})

export class ReservationServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  public createReservation(reservation: Reservation): Observable<any> {
    return this.http.post<Reservation>(RESERVATION_SERVER + '/reservation/createReserv', JSON.stringify(reservation), this.httpOptions);
  }

  public updateReservation(reservation: Reservation): Observable<any> {
    return this.http.put<Reservation>
    (RESERVATION_SERVER + '/reservation/updateReserv/' + reservation.id, JSON.stringify(reservation), this.httpOptions);
  }

  public deleteReservationById(reservation: Reservation): Observable<any> {
    return this.http.delete<Reservation>(RESERVATION_SERVER + '/reservation/deleteById/' + reservation.id);
  }

  public deleteReservationByDate(reservation: Reservation): Observable<any> {
    return this.http.delete<Reservation>(RESERVATION_SERVER + '/reservation/deleteByDate/' + reservation.date);
  }

  public getAllReservations(): Observable<any> {
    return this.http.get<Reservation>(RESERVATION_SERVER + '/reservation/all');
  }

  public findReservationById(id: number): Observable<any> {
    return this.http.get<Reservation>(RESERVATION_SERVER + '/reservation/getById/' + id);
  }

  public findReservationtByDate(date: string): Observable<any> {
    return this.http.get<Reservation>(RESERVATION_SERVER + '/reservation/getByDate/' + date);
  }

}
