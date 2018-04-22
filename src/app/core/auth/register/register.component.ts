import {Component} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {PostLoginResponse} from '../../../shared/dto/login.dto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  public email: string;
  public password: string;
  public loginError: string;

  constructor(private readonly auth: AuthService, private router: Router) {}

  login(): void {
    const self = this;
    this.auth.login({email: this.email, password: this.password})
      .then((res: PostLoginResponse) => {
        if (res.access_token) {
          self.router.navigate(['']);
        } else {
          this.loginError = res.message;
        }
        // display warning
      });
  }

  logout(): void {

  }
}
