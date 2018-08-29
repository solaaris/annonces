import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../../services/annonce.service';
import { Annonce } from '../../domaine/annonce';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})

export class AnnoncesComponent implements OnInit {
  annonces: Annonce[];
  titi : boolean = false;
  constructor(private annonceService: AnnonceService, private route: ActivatedRoute) {
    this.route.params.subscribe(p => this.search(p.categorie));
    
  }
  canActivate 

  ngOnInit() {
    
  }

  search(categorie: String) {
    
    let p = 1;


      this.annonceService.getAllAnnonces().subscribe( x => this.annonces = x );
   
  }
  clickMe() { 
     
    this.titi = !this.titi ;

   }
}