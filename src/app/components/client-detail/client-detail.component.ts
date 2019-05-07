import { Component, OnInit } from '@angular/core';
import { Client } from '../../model/Client';
import { ClientServiceService } from '../../services/client-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})

export class ClientDetailComponent implements OnInit {

  client: Client;
  clients: Client[];

  constructor(private clientService: ClientServiceService, private router: Router, private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getClientById(parseInt(params.get('client_id'), 10)); });
  }

  public getClientById(id: number): void {
    this.clientService.findClientById(id).subscribe((response) => {
      this.client = response; console.log(this.client); });
  }

  public editButtonPressed(): void {
    this.router.navigateByUrl('/editNewClient/' + this.client.id);
  }

  public deleteButtonPressed(): void {
    this.clientService.deleteClientById(this.client).subscribe((response) => {
      this.router.navigateByUrl('/client'); });
  }

  public findClientById(id: number): Client {
    for (const client of this.clients) {
      if (client.id === id) {
        return client;
      }
    }
    return null;
  }

  public goBackButtonPressed(): void {
    this.location.back();
  }

}
