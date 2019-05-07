import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activite } from '../model/activite';
const ACTIVITE_SERVER = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})

export class LaserGameServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  public createActivite(activite: Activite): Observable<any> {
    return this.http.post<Activite>(ACTIVITE_SERVER + '/actLaserGame/createAct', JSON.stringify(activite), this.httpOptions);
  }

  public updateActivite(activite: Activite): Observable<any> {
    return this.http.put<Activite>(ACTIVITE_SERVER + '/actLaserGame/updateAct/' + activite.id,
    JSON.stringify(activite), this.httpOptions);
  }

  public deleteActiviteById(activite: Activite): Observable<any> {
    return this.http.delete<Activite>(ACTIVITE_SERVER + '/actLaserGame/deleteById/' + activite.id);
  }

  public getAllLaserGames(): Observable<any> {
    return this.http.get<Activite>(ACTIVITE_SERVER + '/actLaserGame/all');
  }

  public findActiviteById(id: number): Observable<any> {
    return this.http.get<Activite>(ACTIVITE_SERVER + '/actLaserGame/getById/' + id);
  }

  public findActiviteByTheme(theme: string): Observable<any> {
    return this.http.get<Activite>(ACTIVITE_SERVER + '/actLaserGame/getByTheme/' + theme);
  }

}
