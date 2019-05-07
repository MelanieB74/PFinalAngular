export class Activite {
    id: number;
    tarifNormal: number;
    tarifJeune: number;
    tarifEtudiant: number;
    nbMax: number;
    nbMin: number;
    description: string;

    constructor(id: number, tfNorm: number, tfJeun: number, tfEtud: number, nbMAx: number, nbMin: number, description: string) {
        this.id = id;
        this.tarifNormal = tfNorm;
        this.tarifJeune = tfJeun;
        this.tarifEtudiant = tfEtud;
        this.nbMax = nbMAx;
        this.nbMin = nbMin;
        this.description = description;
    }

    public static createBlank(): Activite {
        return new Activite(null, 1, 1, 1, 1, 1, '');
    }

    public static activiteFromJSON(obj: any): Activite {
        return new Activite(obj.id, obj.tarifNormal, obj.tarifJeune, obj.tarifEtudiant, obj.nbMax, obj.nbMin, obj.description);
    }

}

export class ActEscapeGame extends Activite {
    mission: string;

    constructor(id: number, mission: string, tfNorm: number, tfJeun: number,
                tfEtud: number, nbMAx: number, nbMin: number, description: string) {
        super(id, tfNorm, tfJeun, tfEtud, nbMAx, nbMin, description);
        this.mission = mission;
    }

    public static createBlank(): ActEscapeGame {
        return new ActEscapeGame(-1, '', 1, 1, 1, 1, 1, '');
    }

    public static activiteFromJSON(obj: any): ActEscapeGame {
        return new ActEscapeGame(obj.id, obj.mission, obj.tarifNormal, obj.tarifJeune, obj.tarifEtudiant,
                                obj.nbMax, obj.nbMin, obj.description);
    }

}

export class ActLaserGame extends Activite {
    theme: string;

    constructor(id: number, theme: string, tfNorm: number, tfJeun: number, tfEtud: number,
                nbMAx: number, nbMin: number, description: string) {
        super(id, tfNorm, tfJeun, tfEtud, nbMAx, nbMin, description);
        this.theme = theme;
    }

    public static createBlank(): ActLaserGame {
        return new ActLaserGame(-1, '', 1, 1, 1, 1, 1, '');
    }

    public static activiteFromJSON(obj: any): ActLaserGame {
        return new ActLaserGame(obj.id, obj.theme, obj.tarifNormal, obj.tarifJeune, obj.tarifEtudiant,
            obj.nbMax, obj.nbMin, obj.description);
    }

}

export class ActBowling extends Activite {
    piste: number;

    constructor(id: number, piste: number, tfNorm: number, tfJeun: number, tfEtud: number,
                nbMAx: number, nbMin: number, description: string) {
        super(id, tfNorm, tfJeun, tfEtud, nbMAx, nbMin, description);
        this.piste = piste;
    }

    public static createBlank(): ActBowling {
        return new ActBowling(-1, 1, 1, 1, 1, 1, 1, '');
    }

    public static activiteFromJSON(obj: any): ActBowling {
        return new ActBowling(obj.id, obj.piste, obj.tarifNormal, obj.tarifJeune, obj.tarifEtudiant, obj.nbMax, obj.nbMin, obj.description);
    }

}
