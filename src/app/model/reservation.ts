import { Client } from './Client';
import { Activite } from './Activite';

export class Reservation {
    id: number;
    date: string;
    heure: string;
    activite: Activite;
    client: Client;

    constructor(id: number, date: string, heure: string, activite: Activite, client: Client) {
        this.id = id;
        this.date = date;
        this.heure = heure;
        this.activite = activite;
        this.client = client;
    }

    public static createBlank() {
        return new Reservation(-1, '', '', null, null);
    }

    public static reservationFromJSON(obj: any): Reservation {
        return new Reservation(obj.id, obj.dare, obj.heure, obj.activite, obj.client);
    }

}
