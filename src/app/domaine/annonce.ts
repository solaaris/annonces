import { Categorie } from "./categorie";

export class Annonce {
  id  : number ;
  titre: string;
  texte: string; 
  categorie: Categorie = Categorie.info;
  prix: number;
  date: string;
  //date: Date = new Date();
} 