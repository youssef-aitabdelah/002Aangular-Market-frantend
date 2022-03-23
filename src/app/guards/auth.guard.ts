import { AccountService } from './../services/account.service';
import { TokenService } from './../services/token.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private accaountService: AccountService,
    private router: Router
  ){}

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    
      if(!this.tokenService.loggedIn()){
        this.tokenService.remove();
        this.accaountService.changeStatus(false);
        this.router.navigateByUrl("/login");
        return false;
      }
      return true;
  }
  
}
