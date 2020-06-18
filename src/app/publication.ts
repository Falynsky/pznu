export class Publication {
  id: number;
  Autor: string;
  Tytul: string;
  Rok: number;


  constructor(id: number, Autor: string, Tytul: string, Rok: number) {
    this.id = id;
    this.Autor = Autor;
    this.Tytul = Tytul;
    this.Rok = Rok;
  }
}
