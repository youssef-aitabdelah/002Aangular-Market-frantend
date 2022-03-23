import { ToastrService } from 'ngx-toastr';
import { TokenService } from './../../../services/token.service';
import { AccountService } from './../../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn: boolean = false;
  public userInfos: any = null;
  // currentUser: null | undefined;

  constructor(
    private router: Router,
    private accountService: AccountService, 
    private tokenService: TokenService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {

    this.accountService.authStatus.subscribe(value => {
      this.loggedIn = value
      this.userInfos = this.tokenService.getInfos();
      // this.currentUser = this.tokenService.getInfos();
    });
  }

  logout():void {
    this.tokenService.remove();
    this.accountService.changeStatus(false);
    this.toastr.info(
      `Déconnexion`,
      'Vous êtes déconnecter !',
      {
        timeOut: 3000,
        positionClass: 'toast-bottom-left'
      }
  );
    this.router.navigateByUrl("/login");
  }

}
