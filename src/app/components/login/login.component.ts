import { ToastrService } from 'ngx-toastr';
import { AccountService } from './../../services/account.service';
import { TokenService } from './../../services/token.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(10)])
  });

  constructor(
    private authService: AuthService, 
    private tokenService: TokenService, 
    private accaountService: AccountService,
    private router: Router,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.loginForm.value)
    .subscribe(
      res => this.handleResponse(res),
      err => this.toastr.error(
          `Erreur`,
          'Merci de Vérifier votre email ou mot de passe !',
          {
            timeOut: 3000,
            positionClass: 'toast-bottom-left'
          }
      ))
  }

  handleResponse(res: any){
    this.tokenService.handle(res);
    this.accaountService.changeStatus(true);
    this.toastr.success(
      `Bienvenu : ${ this.tokenService.getInfos().name }`,
      'Vous êtes connectés !',
      {
        timeOut: 3000,
        positionClass: 'toast-bottom-left'
      }
    );
    this.router.navigateByUrl("/addresses");
  }

}
