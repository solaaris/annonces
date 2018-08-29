import { TestBed, inject } from '@angular/core/testing';

import { AnnonceService } from './services/annonce.service';
import { HttpClientModule } from '@angular/common/http';
import { Annonce } from './domaine/annonce';
import { HttpTestingController } from '@angular/common/http/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule,Routes, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('AnnonceService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let annonce: Annonce[];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [AnnonceService, Annonce]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([AnnonceService], (service: AnnonceService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an annonce', () => {    
    httpClient.get<Annonce>("http://blob").subscribe(data => expect(data).toEqual(this.annonceService.getAnnoncesById(1)));
    const req = httpTestingController.expectOne('http://blob');
    expect(req.request.method).toEqual('GET'); 
    httpTestingController.verify();
  })
});



