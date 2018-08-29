import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnnonceComponent } from './create-annonce.component';
import { AnnonceService } from '../../services/annonce.service';
import { HttpClient } from '@angular/common/http';
import { Annonce } from '../../domaine/annonce';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpTestingController } from '@angular/common/http/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule,Routes, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';



describe('CreateAnnonceComponent', () => {
  let component: CreateAnnonceComponent;
  let fixture: ComponentFixture<CreateAnnonceComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAnnonceComponent, NavbarComponent],
      imports: [ FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [AnnonceService, Annonce]
    }).compileComponents();

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return one record', () => {
    const fakeDataFromServer: Annonce = { 'id': 1, 'categorie': 1, 'titre': 'Appartement T3', 'prix': 150000, 'date': '2018-04-23T18:25:43.511Z', 'texte': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' };
    const dataSupposedTobeReturned: Annonce = { 'id': 1, 'categorie': 1, 'titre': 'Appartement T3', 'prix': 150000, 'date': '2018-04-23T18:25:43.511Z', 'texte': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' }, ;
    // On envoie la requête HTTP
    httpClient.get<Annonce>("http://blob").subscribe(data => expect(data).toEqual(dataSupposedTobeReturned));
    const req = httpTestingController.expectOne('http://blob');
    expect(req.request.method).toEqual('GET'); 
    req.flush(fakeDataFromServer);
    httpTestingController.verify();
  })
});
