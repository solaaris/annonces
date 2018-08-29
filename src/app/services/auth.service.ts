import { Injectable } from '@angular/core';
import { User } from '../domaine/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user:User = new User();
  isConnected:boolean = false;

  constructor (private router: Router) {}

  check(login,password):boolean {
    let failed = true;
    if ( login == password ) {
      this.user = new User();
      this.isConnected = true;
      this.user.email = login;
      failed = false;
      this.router.navigate(['annonces']);
    }
    else
    {
      console.log('erreur de login');
      return failed;
    }
   
  }

  logout(){
    this.isConnected = false;
    this.user = new User();
    this.router.navigate(['annonces']);
  }

}
