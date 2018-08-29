import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, catchError, filter, tap } from 'rxjs/operators';
import { Annonce } from '../domaine/annonce';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

const ANNONCES = [
  { 'id' : 1 ,'categorie': 1 , 'titre': 'Appartement T3', 'prix':150000,'date':'2018-04-23T18:25:43.511Z', 'texte': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' }, 
  { 'id' : 2 , 'categorie': 2 , 'titre': 'Ultra Portable', 'prix':300,'date':'2018-04-23T18:25:43.511Z', 'texte': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' }, 
  { 'id' : 3 ,'categorie': 2 , 'titre': 'MBP 13', 'prix':800,'date':'2018-04-23T18:25:43.511Z', 'texte': 'xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' }, 
  { 'id' : 4 ,'categorie': 3 , 'titre': 'Clio', 'prix':10000,'date':'2018-04-23T18:25:43.511Z', 'texte': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur' },
  { 'id' : 5 , 'categorie': 2 , 'titre': 'Ultra Portable', 'prix':300,'date':'2018-04-23T18:25:43.511Z', 'texte': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' }, 
  { 'id' : 6 ,'categorie': 2 , 'titre': 'MBP 13', 'prix':800,'date':'2018-04-23T18:25:43.511Z', 'texte': 'xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' }, 
  { 'id' : 7 ,'categorie': 3 , 'titre': 'Clio', 'prix':10000,'date':'2018-04-23T18:25:43.511Z', 'texte': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur' }
];



@Injectable()
export class AnnonceService {

  constructor(private http:HttpClient) { }
 
  getAllAnnonces(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>("/api/annonces");
  }

  getAnnoncesByCategorie(cat: number): Annonce[] {
    return ANNONCES.filter( a => a.categorie==cat);
  }

  getAnnoncesByName(mot: String): Annonce[] {
    return ANNONCES.filter(a=>a.titre==mot);
  }

  getAnnoncesById(id: number): Observable<Annonce>  {
    return this.http.get<Annonce>('/api/annonces/') ;
  }

  saveAnnonce(annonce:Annonce)
  {
    return this.http.post<Annonce>('/api/annonces/',annonce);
  }

  getValue(number:Number):Number
  {
    return number;
  }
}   