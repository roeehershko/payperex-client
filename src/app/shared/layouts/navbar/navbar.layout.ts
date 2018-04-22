import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {Router} from '@angular/router';
import {AuthService} from '../../../core/auth/auth.service';
import {User} from '../../dto/token.type';

@Component({
  selector: 'app-navbar-layout',
  templateUrl: 'navbar.layout.html'
})

export class NavbarLayoutComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document,  public router: Router, public authService: AuthService) {}

  public user: User;

  ngOnInit() {
    this.document.body.classList.add('layout-navbar');
    this.user = this.authService.getUser();
  }

  logoutClicked() {
    this.router.navigate(['/auth/login']);
  }
}
