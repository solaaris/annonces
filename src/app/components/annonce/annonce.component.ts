import { Component, OnInit, Input } from '@angular/core';
import { Annonce } from '../../domaine/annonce'
import { AnnonceService } from '../../services/annonce.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})

export class AnnonceComponent implements OnInit {
  annonce: Annonce[];
  constructor(private annonceService: AnnonceService, private route: ActivatedRoute) {
    this.route.params.subscribe(parms=> this.searchById(parms.id));

  }

  ngOnInit() {
   
  }
  searchById(id: number) {
      console.log('id: ' + id);
      this.annonceService.getAnnoncesById(id).subscribe( x => this.annonce = x );
  }

}