import { Component, OnInit } from '@angular/core';
import { Annonce } from '../../domaine/annonce';
import { Router } from '@angular/router';
import { AnnonceService } from '../../services/annonce.service';
@Component({
  selector: 'app-create-annonce',
  templateUrl: './create-annonce.component.html',
  styleUrls: ['./create-annonce.component.css']
})
export class CreateAnnonceComponent implements OnInit {
  titre: string;
  texte: string;
  prix: number;
  annonce : Annonce;

  constructor(private router:Router, private annonceService: AnnonceService) { }

  ngOnInit(){}
  
  save() {
    this.annonce= new Annonce;
    this.annonce.prix = this.prix;
    this.annonce.texte = this.texte;
    this.annonce.titre = this.titre;
    this.annonceService.saveAnnonce(this.annonce).subscribe( x => this.annonce = x );
    this.router.navigate(['#/annonces']);
    console.log(this.titre+"/"+this.texte+"/"+this.prix)

  }

    getValue (Number: number):number
    {
      return Number ;

    } 
}
