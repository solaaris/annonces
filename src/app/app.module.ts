import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AnnonceComponent } from './components/annonce/annonce.component';
import { AnnoncesComponent } from './components/annonces/annonces.component';
import { AnnonceService } from './services/annonce.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule,Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CreateAnnonceComponent } from './components/create-annonce/create-annonce.component';
import { ConnectedGuard } from './guards/connected.guard';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent  },
  { path: 'createannonce', component: CreateAnnonceComponent,  canActivate: [ ConnectedGuard ]},
  { path: 'annonces/:categorie', component: AnnoncesComponent },
  { path: 'annonce/:id', component: AnnonceComponent },
  { path: '**', component: AnnoncesComponent  }

];

@NgModule({
  declarations: [
    AppComponent,AnnonceComponent,SignupComponent,AnnoncesComponent,NavbarComponent, LoginComponent, CreateAnnonceComponent, SignupComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(
      appRoutes,{useHash:true}
    ), HttpClientModule
  ],
  providers: [AnnonceService,AuthService,ConnectedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
