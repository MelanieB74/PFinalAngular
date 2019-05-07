export class Personne {
    id: number;
    nom: string;
    tel: LongRange;
    mail: string;
    userName: string;
    passWord: string;
    actived: boolean;

    constructor(id: number, nom: string, tel: LongRange, mail: string, userName: string, passWord: string) {
        this.id = id;
        this.nom = nom;
        this.tel = tel;
        this.mail = mail;
        this.userName = userName;
        this.passWord = passWord;
    }
}

export class Employe extends Personne {
    public type: string;
    public prenom: string;
    public matricule: number;

    constructor(id: number, type: string, nom: string, prenom: string,
                matricule: number, tel: LongRange, mail: string, userName: string, passWord: string) {
        super(id, nom, tel, mail, userName, passWord);
        this.type = type;
        this.prenom = prenom;
        this.matricule = matricule;

    }

    public static createBlank(): Employe {
        return new Employe(-1, '', '', '', 1, null, '', '', '');
    }

    public static employeFromJSON(obj: any): Employe {
        return new Employe(obj.id, obj.type, obj.nom, obj.prenom, obj.matricule, obj.tel, obj.mail, obj.userName, obj.passWord);
    }

}
