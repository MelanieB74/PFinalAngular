import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe } from '../model/employe';
const EMPLOYE_SERVER = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})

export class EmployeServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  public createEmploye(employe: Employe): Observable<any> {
    return this.http.post<Employe>(EMPLOYE_SERVER + '/employe/createEmploye', JSON.stringify(employe), this.httpOptions);
  }

  public updateEmploye(employe: Employe): Observable<any> {
    return this.http.put<Employe>(EMPLOYE_SERVER + '/employe/updateEmploye/' + employe.id,
    JSON.stringify(employe), this.httpOptions);
  }

  public deleteEmployeById(employe: Employe): Observable<any> {
    return this.http.delete<Employe>(EMPLOYE_SERVER + '/employe/deleteById/' + employe.id);
  }

  public deleteEmployeByNom(employe: Employe): Observable<any> {
    return this.http.delete<Employe>(EMPLOYE_SERVER + '/employe/deleteByNom/' + employe.nom);
  }

  public getAllEmployes(): Observable<any> {
    return this.http.get<Employe>(EMPLOYE_SERVER + '/employe/all');
  }

  public findEmployeById(id: number): Observable<any> {
    return this.http.get<Employe>(EMPLOYE_SERVER + '/employe/getById/' + id);
  }

  public findEmployeByNom(nom: string): Observable<any> {
    return this.http.get<Employe>(EMPLOYE_SERVER + '/employe/getByNom/' + nom);
  }

}
