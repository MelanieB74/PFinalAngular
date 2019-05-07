import { Component, OnInit } from '@angular/core';
import { Client } from '../../model/Client';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ClientServiceService } from '../../services/client-service.service';

@Component({
  selector: 'app-client-edit-new',
  templateUrl: './client-edit-new.component.html',
  styleUrls: ['./client-edit-new.component.css']
})

export class ClientEditNewComponent implements OnInit {

  client_in_progress: Client;
  mode_access: string;

  constructor(private router: Router, private route: ActivatedRoute, private clientService: ClientServiceService) {
    this.client_in_progress = Client.createBlank();
    console.log(this.client_in_progress);
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('client_id') != null) {
        console.log(params.get('client_id'));
        this.mode_access = 'MODIFICATION';
        this.clientService.findClientById(parseInt(params.get('client_id'), 10)).subscribe(
          (response) => {
            this.client_in_progress = response; });
      } else {
        this.mode_access = 'AJOUT';
        console.log('good');
      }
    });
  }

  public addClient(client: Client): void {
    this.clientService.createClient(this.client_in_progress).subscribe((response) => {
      this.router.navigateByUrl('/client'); });
  }

  public updateClient(client: Client): void {
    this.clientService.updateClient(this.client_in_progress).subscribe((response) => {
      this.router.navigateByUrl('/client'); });
  }

  public addUpdateClientClicked(): void {
    if (this.mode_access === 'MODIFICATION') {
      this.updateClient(this.client_in_progress);
    } else {
      this.addClient(this.client_in_progress);
    }
  }

}
