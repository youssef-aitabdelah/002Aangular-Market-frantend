import { TokenService } from './../services/token.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AfterAuthGuard implements CanActivate {

  constructor(private tokenService: TokenService,private router: Router){}

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    
      if(this.tokenService.loggedIn()){
        this.router.navigateByUrl("/");
        return false;
      }
      return true;
  }
  
}
