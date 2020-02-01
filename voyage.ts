class Sejour {

    constructor(private _nom: string, private _prix: number) {
    }

    get nom(): string {
        return this._nom;
    }
    get prix(): number {
        return this._prix;
    }
}

class SejourService {

    private _sejour:Sejour[];
    constructor() {
        this._sejour = [new Sejour('Maroc', 1000), new Sejour('Norvege', 3000)];
    }
    findByName(nom: string): Sejour | void {
        this._sejour.forEach(_sejour => {
            if (_sejour.nom === nom) {
                return _sejour;
            }
        });
    }
}

const test1 = new SejourService().findByName('Maroc');
console.log(test1);
const test2 = new SejourService().findByName('Italie');
console.log(test2);
