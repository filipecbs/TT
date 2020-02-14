import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrecisaEstarLogadoGuard implements CanActivate {
  token;
  constructor(public router:Router){}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean{

    this.token = localStorage.getItem('userToken');
    if( this.token )
      return true;
    else
      return this.router.navigate(['login']);
  }
}
