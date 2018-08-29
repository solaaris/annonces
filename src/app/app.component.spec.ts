import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AnnonceService } from './services/annonce.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,NavbarComponent , NgForm
      ],
      providers: [AnnonceService],
      imports : [ RouterTestingModule],
    }).compileComponents();



  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'annonces'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('annonces');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('1');
  }));
});
